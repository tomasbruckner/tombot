import * as cheerio from "cheerio";
import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class Everest extends Restaurant {
  protected url: string = "https://www.everestbrno.cz/denni-menu/";

  protected defaultParams: SlackAttachment = {
    color: "#ffdc00",
    title: "Everest",
    title_link: "https://www.everestbrno.cz/denni-menu/",
  };

  public handleResponse(body: string) {
    const $ = cheerio.load(body);
    const dishes = this.getDishes($);

    return this.createSlackMenu(dishes);
  }

  private getDishes($) {
    const dayIndex = new Date().getDay();

    if (dayIndex === 0 || dayIndex > 5) {
      throw new Error("Everest does not have menu on weekend");
    }

    const tables = $(`div >table > tbody`)[dayIndex - 1];
    const nodes = $(tables).find("> tr > td");
    const result = [];

    for (let i = 0; i < nodes.length; i += 2) {
      let price = $($(nodes[i + 1]).find("> strong"))
        .contents()
        .text()
        .trim();
      if (!price) {
        price = $($(nodes[i + 1]).find("> em"))
          .contents()
          .text()
          .trim();
      }

      if (!price) {
        price = $(nodes[i + 1])
          .contents()
          .text()
          .trim();
      }

      let name = $($(nodes[i]).find("> p")).contents().text().trim();
      if (!name) {
        name = $($(nodes[i]).find("> strong")).contents().text().trim();
      }

      if (!name) {
        continue;
      }

      result.push({
        dish: {
          name,
          price,
        },
      });
    }

    return result;
  }
}

export default Everest;
