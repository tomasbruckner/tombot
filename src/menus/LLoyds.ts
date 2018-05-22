import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class LLoyds extends Restaurant {
    protected url: string = "https://developers.zomato.com/api/v2.1/dailymenu?res_id=16506456";

    protected defaultParams: SlackAttachment = {
        color: "#7986CB",
        title: "LLoyd's menu",
        title_link: "http://restauracelloyds.cz/menu-2/denni-menu",
    };
}

export default LLoyds;
