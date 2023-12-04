import * as cheerio from "cheerio";
import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class UDrevaka extends Restaurant {
  protected url: string = "https://udrevaka.cz/pages/poledni-menu";

  protected defaultParams: SlackAttachment = {
    color: "#5da7ac",
    title: "U Drevaka",
    title_link: "https://udrevaka.cz/pages/poledni-menu",
  };

  private nameMap = [
    /po\s+Polévka:/i,
    /út\s+Polévka:/i,
    /st\s+Polévka:/i,
    /čt\s+Polévka:/i,
    /pa\s+Polévka:/i,
  ];

  public handleResponse(body: string) {
    const $ = cheerio.load(body);
    const dishes = this.getDishes($);
    return this.createSlackMenu(dishes);
  }

  private getDishes($) {
    const dayIndex = new Date().getDay();

    if (dayIndex === 0 || dayIndex > 5) {
      throw new Error("U Drevaka does not have menu on weekend");
    }

    const prefixRegexp = this.nameMap[dayIndex - 1];

    const nodes = $(`div > div > p`);
    const result = [];
    let found = false;
    for (const x of nodes) {
      const text = $(x).contents().text().replace(/\s+/g, " ").trim();
      if (!found) {
        if (prefixRegexp.test($(x).contents().text().trim())) {
          found = true;
          result.push({
            dish: {
              name: text.replace(prefixRegexp, "").trim(),
              price: "",
            },
          });
        }

        continue;
      }

      if (!text) {
        continue;
      }

      const parts = text.match(/^\d\) (.+)(\d\d\d.*)/);
      if (!parts) {
        break;
      }

      result.push({
        dish: {
          name: parts[1].trim(),
          price: parts[2].includes("k")
            ? parts[2].trim()
            : `${parts[2].trim()} kč`,
        },
      });
    }

    return result;
  }
}

export default UDrevaka;
