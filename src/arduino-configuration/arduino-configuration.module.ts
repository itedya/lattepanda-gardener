import {Module} from "@nestjs/common";
import {ArduinoConfigurationController} from "./arduino-configuration.controller";
import {ArduinoConfigurationService} from "./arduino-configuration.service";
import {DatabaseModule} from "../database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [ArduinoConfigurationController],
    providers: [ArduinoConfigurationService],
    exports: [ArduinoConfigurationService]
})
export class ArduinoConfigurationModule {

}
