import * as request from "request";
import { Restaurants } from "../common/enums";
import AlCapone from "./AlCapone";
import LightOfIndia from "./LightOfIndia";
import Selepka from "./Selepka";
import ZelenaKocka from "./ZelenaKocka";
import UDrevaka from "./UDrevaka";
import Tao from "./Tao";

class RestaurantHandler {
    private restaurants = {
        [Restaurants.AlCapone]: new AlCapone(request),
        [Restaurants.Drevak]: new UDrevaka(request),
        [Restaurants.Tao]: new Tao(request),
        [Restaurants.LightOfIndia]: new LightOfIndia(request),
        [Restaurants.Selepka]: new Selepka(request),
        [Restaurants.ZelenaKocka]: new ZelenaKocka(request),
    };

    /* istanbul ignore next */
    public sendMenu(restaurant: Restaurants, zomatoApiKey: string, message) {
        return this.restaurants[restaurant].getSlackMenu(message, zomatoApiKey);
    }
}

export default RestaurantHandler;
