import * as cheerio from "cheerio";
import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class AlCapone extends Restaurant {
    protected url: string = "http://www.pizzaalcapone.cz/brno/poledni-menu";

    protected defaultParams: SlackAttachment = {
        color: "#5da7ac",
        title: "Al Capone",
        title_link: "http://www.pizzaalcapone.cz/brno/poledni-menu",
    };

    protected handleResponse(body: string) {
        const $ = cheerio.load(body);
        const dishes = this.getDishes($);

        return this.createSlackMenu(dishes);
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
