import {
  Menu,
  Message,
  SlackAttachment,
  SlackMenu,
} from "../common/interfaces";

class Restaurant {
  protected url: string;

  protected defaultParams: SlackAttachment;
  public constructor(protected request) {}

  public async getSlackMenu(message: Message) {
    const attachments = await this.getMenu();

    return this.createAttachmentMessage(message, attachments);
  }

  protected getMenu() {
    return new Promise((resolve, reject) => {
      this.request.get(
        {
          url: this.url,
        },
        (err, res, body) => {
          if (err) {
            return reject(err);
          } else if (!res || res.statusCode !== 200) {
            return reject(res);
          }

          try {
            const slackMenu = this.handleResponse(body);

            return resolve(slackMenu);
          } catch (e) {
            return reject(e);
          }
        }
      );
    });
  }

  protected handleResponse(body: string) {
    const dailyMenu = JSON.parse(body);

    return this.createSlackMenu(dailyMenu);
  }

  protected createSlackMenu(dailyMenu): SlackMenu[] {
    let dishes = dailyMenu;

    if (dailyMenu.daily_menus) {
      dishes = dailyMenu.daily_menus[0].daily_menu.dishes;
    }

    const menus = dishes.map(this.textMapper.bind(this));

    // add name and link to the restaurant to the first attachment
    menus[0].title = this.defaultParams.title;
    menus[0].title_link = this.defaultParams.title_link;

    return menus;
  }

  private createAttachmentMessage(message: Message, attachments) {
    return {
      as_user: true,
      attachments,
      channel: message.channel,
      text: "",
    };
  }

  private textMapper(menu: Menu): SlackMenu {
    const { name, price } = menu.dish;
    let footer = "";

    if (price) {
      footer = `Cena: ${price}`;
    }

    return {
      color: this.defaultParams.color,
      fallback: "Restaurant menu",
      footer,
      text: name.trim().replace(/ +/g, " "),
    };
  }
}

export default Restaurant;
