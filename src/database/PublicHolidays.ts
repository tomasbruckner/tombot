import { PublicHoliday } from "../common/interfaces";
import Database from "./Database";

class PublicHolidays extends Database {
    protected path: string = "../../data/publicHolidays.json";

    public getPublicHoliday(date: string): PublicHoliday {
        return this.data[date];
    }
}

export default PublicHolidays;
