import {Module} from "@nestjs/common";
import {ArduinoConfigurationController} from "./arduino-configuration.controller";
import {ArduinoConfigurationService} from "./arduino-configuration.service";
import {DatabaseModule} from "../database/database.module";
import {IsArduinoConfigurationNameUnique} from "./validators/is-arduino-configuration-name-unique.validator";
import {IsArduinoConfigurationPathUnique} from "./validators/is-arduino-configuration-path-unique.validator";

@Module({
    imports: [DatabaseModule],
    controllers: [ArduinoConfigurationController],
    providers: [
        IsArduinoConfigurationNameUnique,
        IsArduinoConfigurationPathUnique,
        ArduinoConfigurationService,
    ],
    exports: [ArduinoConfigurationService]
})
export class ArduinoConfigurationModule {

}
