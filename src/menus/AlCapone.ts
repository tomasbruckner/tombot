import * as cheerio from "cheerio";
import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";
import bent from "bent";

class AlCapone extends Restaurant {
  protected url: string = "https://www.pizzaalcapone.cz/poledni-menu";

  protected defaultParams: SlackAttachment = {
    color: "#5da7ac",
    title: "Al Capone",
    title_link: "https://www.pizzaalcapone.cz/poledni-menu",
  };

  protected async getMenu(_: string) {
    const getIntro = bent("https://www.pizzaalcapone.cz/poledni-menu", "GET");
    const r = await getIntro();
    const phpCookie = r.headers["set-cookie"]
      .filter((x) => x.startsWith("PHP"))[0]
      .split(";")[0];
    const introText = await r.text();
    const redirectUrl = introText
      .match(
        /<a href=\"(\/poledni-menu\?id=[a-zA-Z0-9]+&amp;do=chooseAlcBranch)\">/i
      )[1]
      .replace("&amp;", "&");

    const getAllCookies = bent(
      "https://www.pizzaalcapone.cz" + redirectUrl,
      "GET",
      302,
      {
        cookie: "_nss=1; " + phpCookie,
        referer: "https://www.pizzaalcapone.cz/poledni-menu",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36",
        "cache-control": "no-cache",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
      }
    );
    const cookiesResponse = await getAllCookies();

    const getFinalMenu = bent(
      "https://www.pizzaalcapone.cz/poledni-menu",
      "GET",
      200,
      {
        cookie: cookiesResponse.headers["set-cookie"]
          .map((x) => x.split(";")[0])
          .join(";"),
        referer: "https://www.pizzaalcapone.cz/poledni-menu",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36",
        "cache-control": "no-cache",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
      }
    );

    const finalMenu = await (await getFinalMenu()).text();

    return this.handleResponse(finalMenu);
  }

  public handleResponse(body: string) {
    const $ = cheerio.load(body);
    const dishes = this.getDishes($);

    return this.createSlackMenu(dishes);
  }

  private getDishes($) {
    const dayIndex = new Date().getDay();

    const dishes = [
      {
        dish: {
          name: $(
            `div > h2:nth-child(${6 * (dayIndex - 1) + 1}) + p`
          )[0].children[0].data.trim(),
          price: "",
        },
      },
      {
        dish: {
          name: $(
            `div > h2:nth-child(${6 * (dayIndex - 1) + 1}) + p + div`
          )[0].children[1].children[0].data.trim(),
          price: $(`div > h2:nth-child(${6 * (dayIndex - 1) + 1}) + p + div`)[0]
            .children[1].children[1].children[0]?.data,
        },
      },
      {
        dish: {
          name: $(
            `div > h2:nth-child(${6 * (dayIndex - 1) + 1}) + p + div + div`
          )[0].children[1].children[0].data.trim(),
          price: $(
            `div > h2:nth-child(${6 * (dayIndex - 1) + 1}) + p + div + div`
          )[0].children[1].children[1].children[0]?.data,
        },
      },
      {
        dish: {
          name: $(
            `div > h2:nth-child(${
              6 * (dayIndex - 1) + 1
            }) + p + div + div + div`
          )[0].children[1].children[0].data.trim(),
          price: $(
            `div > h2:nth-child(${
              6 * (dayIndex - 1) + 1
            }) + p + div + div + div`
          )[0].children[1].children[1].children[0]?.data,
        },
      },
      {
        dish: {
          name: $(
            `div > h2:nth-child(${
              6 * (dayIndex - 1) + 1
            }) + p + div + div + div + div`
          )[0].children[1].children[0].data.trim(),
          price: $(
            `div > h2:nth-child(${
              6 * (dayIndex - 1) + 1
            }) + p + div + div + div + div`
          )[0].children[1].children[1].children[0]?.data,
        },
      },
    ];

    return dishes;
  }
}

export default AlCapone;
