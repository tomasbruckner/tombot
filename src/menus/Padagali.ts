import * as cheerio from "cheerio";
import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class Padagali extends Restaurant {
    protected url: string = "https://padagali.cz/denni-menu/";

    protected defaultParams: SlackAttachment = {
        color: "#ffdcff",
        title: "Padagali",
        title_link: "https://padagali.cz/denni-menu/",
    };

    public handleResponse(body: string) {
        const $ = cheerio.load(body);
        const dishes = this.getDishes($);

        return this.createSlackMenu(dishes);
    }

    private getDishes($) {
        const dayIndex = new Date().getDay();

        if (dayIndex === 0 || dayIndex > 5) {
            throw new Error("Padagali does not have menu on weekend");
        }

        let nodes = $(`div.glf-mor-restaurant-menu-category`)[dayIndex - 1];
        nodes = $(nodes).find("> div > div > div");
        const result = [];

        for (let i = 0; i < nodes.length; i += 1) {
            const price = $(nodes[i].children[1].children[1]).contents().text();
            const name = $(nodes[i].children[1].children[0]).contents().text();
            const description = $(nodes[i].children[3]).contents().text()
            result.push({
                dish: {
                    name: `${name} (${description})`,
                    price,
                },
            });
        }

        return result;
    }
}

export default Padagali;
