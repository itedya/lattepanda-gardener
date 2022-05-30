import {Injectable} from "@nestjs/common";
import {JSONFile, Low} from "lowdb";
import {DatabaseFileInterface} from "./database-file.interface";
import * as path from "path";

@Injectable()
export class DatabaseService {
    private db: Low<DatabaseFileInterface>;

    async onApplicationBootstrap() {
        const dbFilePath = path.join(__dirname, "database.json");
        const adapter = new JSONFile<DatabaseFileInterface>(dbFilePath);
        this.db = new Low<DatabaseFileInterface>(adapter);

        await this.db.read();

        this.db.data ||= {arduinoConfigurations: []}
    }

    public getDatabase(): Low<DatabaseFileInterface> {
        return this.db;
    }
}
