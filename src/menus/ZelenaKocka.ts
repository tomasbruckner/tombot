import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class ZelenaKocka extends Restaurant {
    protected url: string = "https://developers.zomato.com/api/v2.1/dailymenu?res_id=16505879";

    protected defaultParams: SlackAttachment = {
        color: "#7CB342",
        title: "Grand restaurant Zelená Kočka",
        title_link: "http://www.zelenakocka.cz/index.php",
    };
}

export default ZelenaKocka;
