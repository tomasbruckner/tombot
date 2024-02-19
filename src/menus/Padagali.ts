import * as cheerio from "cheerio";
import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class Padagali extends Restaurant {
    protected url: string = "https://padagali.choiceqr.com/section:denni-menu";

    protected defaultParams: SlackAttachment = {
        color: "#ffdcff",
        title: "Padagali",
        title_link: "https://padagali.choiceqr.com/section:denni-menu",
    };

    private ids = ['category-pondeli','category-utery','category-streda','category-ctvrtek','category-patek']

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

        const root = $(`#${this.ids[dayIndex - 1]}`);
        const menuRoot = $(root).find(`[class*="styles_menuCategoryList"] > [class*="styles_menu-item"]`);
        const result = [];

        for (let i = 0; i < menuRoot.length; i += 1) {
            const name = $(menuRoot[i]).find(`[class*="menu-item-title"]`).text();
            const description = $(menuRoot[i]).find(`[class*="menu-item-description"]`).text();
            const price = $(menuRoot[i]).find(`[class*="menu-item-price"]`).text();
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
