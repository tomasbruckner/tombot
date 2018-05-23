import * as cheerio from "cheerio";
import * as request from "request";
import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class AlCapone extends Restaurant {
    protected url: string = "http://www.pizzaalcapone.cz/brno/poledni-menu";

    protected defaultParams: SlackAttachment = {
        color: "#5da7ac",
        title: "Al Capone's menu",
        title_link: "http://www.pizzaalcapone.cz/brno/poledni-menu",
    };

    protected getMenu() {
        return new Promise((resolve, reject) => {
            request.get(this.url, (err, res, body) => {
                if (err) {
                    return reject(err);
                } else if (!res || res.statusCode !== 200) {
                    return reject(res);
                }

                let $;
                try {
                    $ = cheerio.load(body);
                } catch (e) {
                    return reject(e);
                }

                const slackMenu = this.createSlackMenu(this.getDishes($));
                return resolve(slackMenu);

            });
        });
    }

    private getDishes($) {
        const nodes = $(".poledni-menu.active-day")[0].childNodes;
        let prices = $(".poledni-menu:nth-child(6)")[0].childNodes[2].data;
        prices = prices.match(/\d+ Kč/g);

        const dishes = [{
            dish: {
                name: nodes[3].data.trim(),
                price: "",
            },
        }, {
            dish: {
                name: nodes[5].data.trim(),
                price: prices[0],
            },
        }, {
            dish: {
                name: nodes[7].data.trim(),
                price: prices[1],
            },
        }, {
            dish: {
                name: nodes[9].data.trim(),
                price: prices[2],
            },
        }];

        return dishes;
    }
}

export default AlCapone;
