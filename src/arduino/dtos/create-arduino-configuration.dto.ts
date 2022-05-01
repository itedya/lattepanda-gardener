import { OmitType } from "@nestjs/mapped-types";
import { ArduinoConfigurationDto } from "./arduino-configuration.dto";

export class CreateArduinoConfigurationDto extends OmitType(ArduinoConfigurationDto, ['id'] as const) {
}
