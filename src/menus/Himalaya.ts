import { SlackAttachment } from "../common/interfaces";
import Restaurant from "./Restaurant";

class Himalaya extends Restaurant {
  protected url: string =
    "https://developers.zomato.com/api/v2.1/dailymenu?res_id=18020959";

  protected defaultParams: SlackAttachment = {
    color: "#0a1966",
    title: "Himalaya",
    title_link:
      "https://www.zomato.com/cs/brno/himalaya-kr%C3%A1lovo-pole-brno-sever/denn%C3%AD-menu",
  };
}

export default Himalaya;
