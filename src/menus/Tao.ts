import * as cheerio from "cheerio";
import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class Tao extends Restaurant {
  protected url: string = "https://www.taorestaurant.cz/tydenni_menu/nabidka/";

  protected defaultParams: SlackAttachment = {
    color: "#5da7ac",
    title: "Tao",
    title_link: "https://www.taorestaurant.cz/tydenni_menu/nabidka/",
  };

  protected handleResponse(body: string) {
    const $ = cheerio.load(body);
    const dishes = this.getDishes($);

    return this.createSlackMenu(dishes);
  }

  private getDishes($) {
    const nodes = $(".tydenni-menu-text");

    const dishes = [];
    nodes.each((_, x) => {
      if (x.children.length < 3 || x.children[2].children.length === 0) {
        return true;
      }

      const prefix = x.children[0].children[0].data;
      const dish = x.children[2].children[0].data;
      const matches = dish.match(/\d+[kkK][čcč]/i);
      let price = "";

      if (matches) {
        price = matches[0];
      }

      dishes.push({
        dish: {
          name:
            prefix +
            " " +
            dish
              .trim()
              .replace(/\d+[kkK][čcč]/i, "")
              .replace(/[ .,…]+$/i, ""),
          price,
        },
      });
    });

    return dishes;
  }
}

export default Tao;
