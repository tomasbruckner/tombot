import Bot from "./Bot";
import DayInfo from "./database/DayInfo";
import NameDays from "./database/NameDays";
import PublicHolidays from "./database/PublicHolidays";
import RestaurantHandler from "./menus/RestaurantHandler";
import { RTMClient } from "@slack/rtm-api";
import { WebClient } from "@slack/web-api";

const SLACK_TOKEN = process.env.TOKEN;
const CHANNEL = process.env.CHANNEL;

const rtm = new RTMClient(SLACK_TOKEN, {
  useRtmConnect: true,
});

const web = new WebClient(SLACK_TOKEN);

new Bot(
  SLACK_TOKEN,
  CHANNEL,
  new DayInfo(new NameDays(), new PublicHolidays()),
  rtm,
  web,
  new RestaurantHandler(),
).start();
