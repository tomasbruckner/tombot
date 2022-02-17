import * as cheerio from "cheerio";
import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class UDrevaka extends Restaurant {
    protected url: string = "https://udrevaka.cz/denni-menu/";

    protected defaultParams: SlackAttachment = {
        color: "#5da7ac",
        title: "U Drevaka",
        title_link: "https://udrevaka.cz/denni-menu/",
    };

    protected handleResponse(body: string) {
        const $ = cheerio.load(body);
        const dishes = this.getDishes($);

        return this.createSlackMenu(dishes);
    }

    private getDishes($) {
        const dayIndex = new Date().getDay();

        if (dayIndex === 0 || dayIndex > 5) {
            throw new Error("U Drevaka does not have menu on weekend");
        }

        const nodes = $(`.item-day:nth-child(${dayIndex}) > .row > div`);

        if (nodes.length > 8) {
            return [{
                dish: {
                    name: nodes[0].children[0].data,
                    price: "",
                },
            }, {
                dish: {
                    name: nodes[1].children[0].data,
                    price: nodes[2].children[0].data,
                },
            }, {
                dish: {
                    name: nodes[3].children[0].data,
                    price: nodes[4].children[0].data,
                },
            }, {
                dish: {
                    name: nodes[5].children[0].data,
                    price: nodes[6].children[0].data,
                },
            }, {
                dish: {
                    name: nodes[7].children[0].data,
                    price: nodes[8].children[0].data,
                },
            }];
        }

        return [{
            dish: {
                name: nodes[0].children[0].data,
                price: "",
            },
        }, {
            dish: {
                name: nodes[1].children[0].data,
                price: "",
            },
        }, {
            dish: {
                name: nodes[2].children[0].data,
                price: "",
            },
        }, {
            dish: {
                name: nodes[3].children[0].data,
                price: "",
            },
        }, {
            dish: {
                name: nodes[4].children[0].data,
                price: "",
            },
        }];
    }
}

export default UDrevaka;
