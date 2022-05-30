import {ArduinoConfigurationDto} from "../arduino/dtos/arduino-configuration.dto";

export interface DatabaseFileInterface {
    arduinoConfigurations: ArduinoConfigurationDto[];
}
