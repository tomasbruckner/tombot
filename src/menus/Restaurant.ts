import * as request from "request";

import { Menu, SlackAttachment, SlackMenu } from "../common/interfaces";

class Restaurant {
    protected url: string;

    protected defaultParams: SlackAttachment;

    public async getSlackMenu(message, zomatoApiKey) {
        try {
            const attachments = await this.getMenu(zomatoApiKey);

            return this.createAttachmentMessage(message, attachments);
        } catch (e) {
            console.error(e);
        }
    }

    protected getMenu(zomatoApiKey: string) {
        return new Promise((resolve, reject) => {
            request({
                headers: {
                    user_key: zomatoApiKey,
                },
                url: this.url,
            }, (err, res, body) => {
                if (err) {
                    return reject(err);
                } else if (!res || res.statusCode !== 200) {
                    return reject(res);
                }

                try {
                    const dailyMenu = JSON.parse(body);
                    const slackMenu = this.createSlackMenu(dailyMenu);

                    resolve(slackMenu);
                } catch (e) {
                    return reject(body);
                }
            });
        });
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

    private createAttachmentMessage(message, attachments) {
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
            text: name.trim(),
        };
    }
}

export default Restaurant;
