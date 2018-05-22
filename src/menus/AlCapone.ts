import * as cheerio from "cheerio";
import * as request from "request";
import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class AlCapone extends Restaurant {
    protected url: string = "";

    protected defaultParams: SlackAttachment = {
        color: "#5da7ac",
        title: "Al Capone's menu",
        title_link: "http://www.pizzaalcapone.cz/brno/poledni-menu",
    };
}

export default AlCapone;
