import * as cheerio from "cheerio";
import * as request from "request";
import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class LightOfIndia extends Restaurant {
    protected url: string = "http://www.lightofindia.cz/lang-cs/denni-menu";

    protected defaultParams: SlackAttachment = {
        color: "#e7ef43",
        title: "Light of India",
        title_link: "http://www.lightofindia.cz/lang-cs/denni-menu",
    };

    protected getMenu() {
        return new Promise((resolve, reject) => {
            request.get(this.url, (err, res, body) => {
                if (err) {
                    return reject(err);
                } else if (!res || res.statusCode !== 200) {
                    return reject(res);
                }

                let nodes;
                try {
                    const $ = cheerio.load(body);
                    nodes = $(`td[valign="top"]`)[0].childNodes;
                    const slackMenu = this.createSlackMenu(this.getDishes(nodes));
                    return resolve(slackMenu);
                } catch (e) {
                    return reject(e);
                }
            });
        });
    }

    private getDishes(nodes) {
        const dayIndex = new Date().getDay();

        if (dayIndex === 0 || dayIndex > 5) {
            return [];
        }

        for (let i = 0, h2 = 0; i < nodes.length; i++) {
            if (nodes[i].type === "tag" && nodes[i].name === "h2") {
                h2++;
            }

            if (h2 === dayIndex) {
                const dishes = [];
                while (nodes[++i].type === "text" || nodes[i].name === "br") {
                    if (nodes[i].name === "br") {
                        continue;
                    }

                    const dish = nodes[i].data;
                    dishes.push({
                        dish: {
                            name: this.getMenuName(dish),
                            price: this.getMenuPrice(dish),
                        },
                    });
                }

                return dishes;
            }
        }
    }

    private getMenuName(dish) {
        return dish.trim().replace(/\d+Kč ?/i, "");
    }

    private getMenuPrice(dish) {
        let price = "";

        const matches = dish.match(/\d+Kč/i);

        if (matches) {
            price = matches[0];
        }

        return price;
    }

}

export default LightOfIndia;
