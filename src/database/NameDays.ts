import { resolve } from "path";
import { NameDay } from "../common/types";
import Database from "./Database";

class NameDays extends Database {
    protected path: string = resolve(__dirname, "../../data/nameDays.json");

    constructor() {
        super();
        this.init();
    }

    public getNameDay(date: string): NameDay {
        return this.data[date];
    }
}

export default NameDays;
