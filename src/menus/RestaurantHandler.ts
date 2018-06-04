import * as request from "request";
import { Restaurants } from "../common/enums";
import AlCapone from "./AlCapone";
import Beranek from "./Beranek";
import LightOfIndia from "./LightOfIndia";
import LLoyds from "./LLoyds";
import Nepal from "./Nepal";
import Selepka from "./Selepka";
import ZelenaKocka from "./ZelenaKocka";

class RestaurantHandler {
    private restaurants = {
        [Restaurants.AlCapone]: new AlCapone(request),
        [Restaurants.Beranek]: new Beranek(request),
        [Restaurants.LightOfIndia]: new LightOfIndia(request),
        [Restaurants.LLoyds]: new LLoyds(request),
        [Restaurants.Nepal]: new Nepal(request),
        [Restaurants.Selepka]: new Selepka(request),
        [Restaurants.ZelenaKocka]: new ZelenaKocka(request),
    };

    public sendMenu(restaurant: Restaurants, zomatoApiKey: string, message) {
        return this.restaurants[restaurant].getSlackMenu(message, zomatoApiKey);
    }
}

export default RestaurantHandler;
