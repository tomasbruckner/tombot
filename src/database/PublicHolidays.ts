import { resolve } from "path";
import { PublicHoliday } from "../common/interfaces";
import Database from "./Database";

class PublicHolidays extends Database {
    protected path: string = resolve(__dirname, "../../data/publicHolidays.json");

    constructor() {
        super();
        this.init();
    }

    public getPublicHoliday(date: string): PublicHoliday {
        return this.data[date];
    }
}

export default PublicHolidays;
