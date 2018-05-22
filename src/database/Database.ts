import * as fs from "fs";

class Database {
    protected path: string;

    protected data;

    public getPublicHolidays() {
        if (!this.data) {
            this.init();
        }

        return this.data;
    }

    /**
     *
     */
    private init() {
        this.data = JSON.parse(fs.readFileSync(this.path, "utf8"));
    }
}

export default Database;
