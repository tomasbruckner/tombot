import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class Beranek extends Restaurant {
    protected url: string = "https://developers.zomato.com/api/v2.1/dailymenu?res_id=16506737";

    protected defaultParams: SlackAttachment = {
        color: "#0a1966",
        title: "U Bileho beranka's menu",
        title_link: "http://www.ubilehoberanka.cz/menu-dne",
    };
}

export default Beranek;
