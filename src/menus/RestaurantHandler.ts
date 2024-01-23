import * as request from "request";
import { Restaurants } from "../common/enums";
import AlCapone from "./AlCapone";
import LightOfIndia from "./LightOfIndia";
import UDrevaka from "./UDrevaka";
import Tao from "./Tao";
import UKarla from "./UKarla";
import Caruso from "./Caruso";
import Everest from "./Everest";
import Padagali from "./Padagali";

class RestaurantHandler {
  private restaurants = {
    [Restaurants.AlCapone]: new AlCapone(request),
    [Restaurants.Caruso]: new Caruso(request),
    [Restaurants.Everest]: new Everest(request),
    [Restaurants.Drevak]: new UDrevaka(request),
    [Restaurants.Tao]: new Tao(request),
    [Restaurants.LightOfIndia]: new LightOfIndia(request),
    [Restaurants.Karel]: new UKarla(request),
    [Restaurants.Padagali]: new Padagali(request),
  };

  /* istanbul ignore next */
  public sendMenu(restaurant: Restaurants, message) {
    return this.restaurants[restaurant].getSlackMenu(message);
  }
}

export default RestaurantHandler;
