import { RTMCallResult, RTMClient, WebClient } from "@slack/client";
import { CronJob } from "cron";
import {
  ALCAPONE_REGEX,
  ALL_REGEX, CARUSO_REGEX,
  DREVAK_REGEX,
  HELP_REGEX,
  JOKE_REGEX,
  KAREL_REGEX,
  LIGHT_REGEX,
  NAMEDAY_REGEX,
  SELEPKA_REGEX,
  TAO_REGEX,
} from "./common/constants";
import { Restaurants, SlackChannels } from "./common/enums";
import DayInfo from "./database/DayInfo";
import RestaurantHandler from "./menus/RestaurantHandler";

class Bot {
  private cronJob: CronJob;
  private selfId: string;

  public constructor(
    private slackToken: string,
    private zomatoKey: string,
    private lunchtimeChannel: string,
    private dayInfo: DayInfo,
    private rtmClient: RTMClient,
    private webClient: WebClient,
    private restaurantHandler: RestaurantHandler,
    CronJobConstructor: CronJob
  ) {
    this.cronJob = new CronJobConstructor(this.getCronSettings());
  }

  public start(): void {
    if (!this.slackToken) {
      throw new Error("No slack token specified in env TOKEN");
    }

    if (!this.zomatoKey) {
      throw new Error("No Zomato api key specified in env ZOMATO");
    }

    this.rtmClient.on("authenticated", (connectData) => {
      this.selfId = connectData.self.id;
      console.log(`Logged in as ${this.selfId} of team ${connectData.team.id}`);
    });

    this.rtmClient.on("connected", () => {
      console.log(`Ready`);
    });

    this.rtmClient.on("message", this.handleMessage.bind(this));

    this.rtmClient.start({});

    this.cronJob.start();
  }

  public getCronSettings() {
    return {
      cronTime: "0 8 * * 1-5",
      onTick: () => this.sendAllByCron(),
      start: false,
      timeZone: "Europe/Prague",
    };
  }

  private handleMessage(message): Array<Promise<void | RTMCallResult>> {
    const messagePromises = [];

    // For structure of `message`, see https://api.slack.com/events/message
    if (message.subtype === "message_changed") {
      return messagePromises;
    }

    if (
      message.text.includes(`<@${this.selfId}>`) ||
      message.channel[0] === SlackChannels.DirectMessage
    ) {
      let all: boolean = false;

      if (HELP_REGEX.test(message.text)) {
        const helpMessage = Bot.getHelpMessage();

        messagePromises.push(
          this.rtmClient.sendMessage(helpMessage, message.channel)
        );
      }

      if (ALL_REGEX.test(message.text)) {
        all = true;
      }

      if (all || NAMEDAY_REGEX.test(message.text)) {
        const res: string = this.dayInfo.getDayInfo();

        messagePromises.push(this.rtmClient.sendMessage(res, message.channel));
      }

      if (JOKE_REGEX.test(message.text)) {
        messagePromises.push(
          this.rtmClient.sendMessage(
            "http://files.explosm.net/comics/Rob/myothercat.png",
            message.channel
          )
        );
      }

      if (all || ALCAPONE_REGEX.test(message.text)) {
        messagePromises.push(this.sendMenu(Restaurants.AlCapone, message));
      }

      if (all || DREVAK_REGEX.test(message.text)) {
        messagePromises.push(this.sendMenu(Restaurants.Drevak, message));
      }

      if (all || KAREL_REGEX.test(message.text)) {
        messagePromises.push(this.sendMenu(Restaurants.Karel, message));
      }

      if (all || TAO_REGEX.test(message.text)) {
        messagePromises.push(this.sendMenu(Restaurants.Tao, message));
      }

      if (all || LIGHT_REGEX.test(message.text)) {
        messagePromises.push(this.sendMenu(Restaurants.LightOfIndia, message));
      }

      if (all || CARUSO_REGEX.test(message.text)) {
        messagePromises.push(this.sendMenu(Restaurants.Caruso, message));
      }

      if (SELEPKA_REGEX.test(message.text)) {
        messagePromises.push(this.sendMenu(Restaurants.Selepka, message));
      }
    }

    return messagePromises;
  }

  private async sendMenu(restaurant: Restaurants, message): Promise<void> {
    try {
      const slackMessage = await this.restaurantHandler.sendMenu(
        restaurant,
        this.zomatoKey,
        message
      );
      this.webClient.chat.postMessage(slackMessage);
    } catch (e) {
      console.error(e);
    }
  }

  private async sendAllByCron() {
    try {
      const history = await this.webClient.channels.history({
        channel: this.lunchtimeChannel,
        inclusive: true,
        oldest: Date.now().toString(),
      });

      if (this.allNotSent(history)) {
        this.handleMessage({
          channel: this.lunchtimeChannel,
          text: `<@${this.selfId}> all`,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  private allNotSent(history): boolean {
    return !history.messages.reduce(
      (acc, m) => acc || ALL_REGEX.test(m.text),
      false
    );
  }

  private static getHelpMessage(): string {
    return `Hello to you from Tombot, the amazing MMP bot that can help you with almost anything!
Check out these commands:
        help
        alcapone
        caruso
        drevak
        karel
        lightofindia
        selepka
        tao
        svatek
        all`;
  }
}

export default Bot;
