import {IsNotEmpty, IsString, IsUUID, Validate} from "class-validator";
import {DoesArduinoConfigurationUuidExist} from "../validators/does-arduino-configuration-uuid-exist.validator";

export class RemoveArduinoConfigurationRequestParamsDto {
    @IsNotEmpty()
    @IsString()
    @IsUUID(4)
    @Validate(DoesArduinoConfigurationUuidExist)
    uuid: string;
}
