import { RTMClient, WebClient } from "@slack/client";
import { Restaurants, SlackChannels } from "./common/enums";
import { PublicHoliday } from "./common/interfaces";
import DayInfo from "./database/DayInfo";
import RestaurantHandler from "./menus/RestaurantHandler";

class Bot {
  private selfId: string;

  public constructor(
    private slackToken: string,
    private zomatoKey: string,
    private dayInfo: DayInfo,
    private rtmClient: RTMClient,
    private webClient: WebClient,
    private restaurantHandler: RestaurantHandler,
  ) { }

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
  }

  private handleMessage(message): void {
    // For structure of `message`, see https://api.slack.com/events/message
    if (message.subtype === "message_changed") {
      return;
    }

    if (message.text.includes(`<@${this.selfId}>`) || message.channel[0] === SlackChannels.DirectMessage) {
      let all: boolean = false;

      if (/\bhelp(\b|\?)/i.test(message.text)) {
        const helpMessage = this.getHelpMessage();
        this.rtmClient.sendMessage(helpMessage, message.channel);
      }

      if (/\b(all)(\b|\?)/i.test(message.text)) {
        all = true;
      }

      if (all || /\b(svatek|meniny|nameday|name day)(\b|\?)/i.test(message.text)) {
        const res: string = this.dayInfo.getDayInfo();
        this.rtmClient.sendMessage(res, message.channel);
      }

      if (/\b(joke|vtip)(\b|\?)/i.test(message.text)) {
        this.rtmClient.sendMessage("http://files.explosm.net/comics/Rob/myothercat.png", message.channel);
      }

      if (all || /\b(alcapone|capone)(\b|\?)/i.test(message.text)) {
        this.sendMenu(Restaurants.AlCapone, message);
      }

      if (all || /\b(beranek)(\b|\?)/i.test(message.text)) {
        this.sendMenu(Restaurants.Beranek, message);
      }

      if (all || /\b(kocka|cat)(\b|\?)/i.test(message.text)) {
        this.sendMenu(Restaurants.ZelenaKocka, message);
      }

      if (all || /\b(light|lightofindia)(\b|\?)/i.test(message.text)) {
        this.sendMenu(Restaurants.LightOfIndia, message);
      }

      if (all || /\b(lloyds|loyds)(\b|\?)/i.test(message.text)) {
        this.sendMenu(Restaurants.LLoyds, message);
      }

      if (all || /\b(nepal)(\b|\?)/i.test(message.text)) {
        this.sendMenu(Restaurants.Nepal, message);
      }

      if (all || /\b(selepka|selepova)(\b|\?)/i.test(message.text)) {
        this.sendMenu(Restaurants.Selepka, message);
      }
    }
  }

  private async sendMenu(restaurant: Restaurants, message) {
    try {
      const slackMessage = await this.restaurantHandler.sendMenu(restaurant, this.zomatoKey, message);
      this.webClient.chat.postMessage(slackMessage);
    } catch (e) {
      console.error(e);
    }
  }

  private getHelpMessage(): string {
    return `Hello to you from Tombot, the amazing TechFides worker that can help you with almost anything!
  Check out these commands:
          help
          alcapone
          beranek
          kocka
          lightofindia
          lloyds
          nepal
          selepka
          svatek
          all`;
  }
}

export default Bot;
