import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class Selepka extends Restaurant {
    protected url: string = "https://developers.zomato.com/api/v2.1/dailymenu?res_id=16506040";

    protected defaultParams: SlackAttachment = {
        color: "#d11b45",
        title: "Selepka's menu",
        title_link: "http://www.selepova.cz/denni-menu",
    };
}

export default Selepka;
