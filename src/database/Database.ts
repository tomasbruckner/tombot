import * as fs from "fs";

abstract class Database {
    protected path: string;

    protected data;

    protected init() {
        this.data = JSON.parse(fs.readFileSync(this.path, "utf8"));
    }
}

export default Database;
