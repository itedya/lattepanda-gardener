import {IsOptional, IsString, IsUUID, Validate} from "class-validator";
import {DoesArduinoConfigurationUuidExist} from "../validators/does-arduino-configuration-uuid-exist.validator";
import {CreateArduinoConfigurationDto} from "./create-arduino-configuration.dto";

export class UpdateArduinoConfigurationDto extends CreateArduinoConfigurationDto {
    @IsOptional()
    @IsString()
    @IsUUID(4)
    @Validate(DoesArduinoConfigurationUuidExist)
    uuid: string;
}
