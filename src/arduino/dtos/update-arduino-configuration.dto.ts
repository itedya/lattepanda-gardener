import {IsInt, IsNotEmpty} from "class-validator";
import {CreateArduinoConfigurationDto} from "./create-arduino-configuration.dto";

export class UpdateArduinoConfigurationDto extends CreateArduinoConfigurationDto {
    @IsNotEmpty()
    @IsInt()
    id: number;
}
