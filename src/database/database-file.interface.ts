import {ArduinoConfigurationDto} from "../arduino-configuration/dtos/arduino-configuration.dto";

export interface DatabaseFileInterface {
    arduinoConfigurations: ArduinoConfigurationDto[];
}
