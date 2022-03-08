import * as cheerio from "cheerio";
import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class AlCapone extends Restaurant {
    protected url: string = "https://www.pizzaalcapone.cz/poledni-menu";

    protected defaultParams: SlackAttachment = {
        color: "#5da7ac",
        title: "Al Capone",
        title_link: "https://www.pizzaalcapone.cz/poledni-menu",
    };

    protected handleResponse(body: string) {
        const $ = cheerio.load(body);
        const dishes = this.getDishes($);

        return this.createSlackMenu(dishes);
    }

    private getDishes($) {
        const dayIndex = new Date().getDay();
        const nodes = $(`div > h2:nth-child(${dayIndex + 1}) + p`);
        const nodes2 = $(`div > h2:nth-child(${dayIndex + 1}) + p + div`);

        const dishes = [{
            dish: {
                name: $(`div > h2:nth-child(${6 * (dayIndex - 1) + 1}) + p`)[0].children[0].data.trim(),
                price: "",
            },
        }, {
            dish: {
                name: $(`div > h2:nth-child(${6 * (dayIndex - 1) + 1}) + p + div`)[0].children[1].children[0].data.trim(),
                price: $(`div > h2:nth-child(${6 * (dayIndex - 1) + 1}) + p + div`)[0].children[1].children[1].children[0].data,
            },
        }, {
            dish: {
                name: $(`div > h2:nth-child(${6 * (dayIndex - 1) + 1}) + p + div + div`)[0].children[1].children[0].data.trim(),
                price: $(`div > h2:nth-child(${6 * (dayIndex - 1) + 1}) + p + div + div`)[0].children[1].children[1].children[0].data,
            },
        }, {
            dish: {
                name: $(`div > h2:nth-child(${6 * (dayIndex - 1) + 1}) + p + div + div + div`)[0].children[1].children[0].data.trim(),
                price: $(`div > h2:nth-child(${6 * (dayIndex - 1) + 1}) + p + div + div + div`)[0].children[1].children[1].children[0].data,
            },
        }, {
            dish: {
                name: $(`div > h2:nth-child(${6 * (dayIndex - 1) + 1}) + p + div + div + div + div`)[0].children[1].children[0].data.trim(),
                price: $(`div > h2:nth-child(${6 * (dayIndex - 1) + 1}) + p + div + div + div + div`)[0].children[1].children[1].children[0].data,
            },
        },
        ];

        return dishes;
    }
}

export default AlCapone;
