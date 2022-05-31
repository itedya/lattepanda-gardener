import {IsOptional, IsString, IsUUID, Validate} from "class-validator";
import {DoesArduinoConfigurationUuidExist} from "../validators/does-arduino-configuration-uuid-exist.validator";

export class GetArduinoConfigurationRequestParamsDto {
    @IsOptional()
    @IsString()
    @IsUUID(4)
    @Validate(DoesArduinoConfigurationUuidExist)
    uuid: string;
}
