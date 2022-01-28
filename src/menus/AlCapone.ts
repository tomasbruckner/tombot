import * as cheerio from "cheerio";
import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class AlCapone extends Restaurant {
    protected url: string = "https://www.pizzaalcapone.cz/cz/poledni-menu";

    protected defaultParams: SlackAttachment = {
        color: "#5da7ac",
        title: "Al Capone",
        title_link: "https://www.pizzaalcapone.cz/cz/poledni-menu",
    };

    protected handleResponse(body: string) {
        const $ = cheerio.load(body);
        const dishes = this.getDishes($);

        return this.createSlackMenu(dishes);
    }

    private getDishes($) {
        const nodes = $("tbody > tr > td > h3");

        const dishes = [{
            dish: {
                name: nodes[1].children[0].data.trim(),
                price: "",
            },
        }, {
            dish: {
                name: nodes[2].children[0].data.trim(),
                price: nodes[3].children[0].data.trim(),
            },
        }, {
            dish: {
                name: nodes[4].children[0].data.trim(),
                price: nodes[5].children[0].data.trim(),
            },
        }, {
            dish: {
                name: nodes[6].children[0].data.trim(),
                price: nodes[7].children[0].data.trim(),
            },
        }, {
            dish: {
                name: nodes[8].children[0].data.trim(),
                price: nodes[9].children[0].data.trim(),
            },
        }];

        return dishes;
    }
}

export default AlCapone;
