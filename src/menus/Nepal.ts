import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class Nepal extends Restaurant {
    protected url: string = "https://developers.zomato.com/api/v2.1/dailymenu?res_id=18346442";

    protected defaultParams: SlackAttachment = {
        color: "#827717",
        title: "Golden Nepal's menu",
        title_link: "http://goldennepal.cz/menu/#denni-menu",
    };
}

export default Nepal;
