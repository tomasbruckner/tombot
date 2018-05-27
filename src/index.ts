import { RTMClient, WebClient } from "@slack/client";
import { CronJob } from "cron";
import Bot from "./Bot";
import DayInfo from "./database/DayInfo";
import NameDays from "./database/NameDays";
import PublicHolidays from "./database/PublicHolidays";
import RestaurantHandler from "./menus/RestaurantHandler";

const SLACK_TOKEN = process.env.TOKEN;
const ZOMATO_KEY = process.env.ZOMATO;

const rtm = new RTMClient(SLACK_TOKEN, {
    useRtmConnect: true,
});

const web = new WebClient(SLACK_TOKEN);

const bot = new Bot(
    SLACK_TOKEN,
    ZOMATO_KEY,
    new DayInfo(new NameDays(), new PublicHolidays()),
    rtm,
    web,
    new RestaurantHandler(),
    CronJob,
).start();
