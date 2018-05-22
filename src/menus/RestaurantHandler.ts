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
        [Restaurants.AlCapone]: new AlCapone(),
        [Restaurants.Beranek]: new Beranek(),
        [Restaurants.LightOfIndia]: new LightOfIndia(),
        [Restaurants.LLoyds]: new LLoyds(),
        [Restaurants.Nepal]: new Nepal(),
        [Restaurants.Selepka]: new Selepka(),
        [Restaurants.ZelenaKocka]: new ZelenaKocka(),
    };

    public sendMenu(restaurant: Restaurants, zomatoApiKey: string, message) {
        return this.restaurants[restaurant].getSlackMenu(message, zomatoApiKey);
    }
}

export default RestaurantHandler;
