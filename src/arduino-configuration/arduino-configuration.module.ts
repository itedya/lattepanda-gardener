import {Module} from "@nestjs/common";
import {ArduinoConfigurationController} from "./arduino-configuration.controller";
import {ArduinoConfigurationService} from "./arduino-configuration.service";

@Module({
    controllers: [ArduinoConfigurationController],
    providers: [ArduinoConfigurationService],
    exports: [ArduinoConfigurationService]
})
export class ArduinoConfigurationModule {

}
