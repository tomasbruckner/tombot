import { NameDay } from "../common/types";
import Database from "./Database";

class NameDays extends Database {
    protected path: string = "./nameDays.json";

    public getNameDay(date: string): NameDay {
        return this.data[date];
    }
}

export default NameDays;
