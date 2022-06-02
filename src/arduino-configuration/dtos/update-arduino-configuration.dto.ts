import {ArrayMaxSize, IsArray, IsNotEmpty, IsOptional, IsString, IsUUID, Length, Validate} from "class-validator";
import {DoesArduinoConfigurationUuidExist} from "../validators/does-arduino-configuration-uuid-exist.validator";
import {IsValidSerialport} from "../../serialport/validators/is-valid-serialport.validator";
import {SerialportDto} from "./serialport.dto";
import {IsArduinoConfigurationNameUnique} from "../validators/is-arduino-configuration-name-unique.validator";
import {IsArduinoConfigurationPathUnique} from "../validators/is-arduino-configuration-path-unique.validator";

export class UpdateArduinoConfigurationDto {
    @IsOptional()
    @IsString()
    @IsUUID(4)
    @Validate(DoesArduinoConfigurationUuidExist)
    uuid: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 64)
    @Validate(IsArduinoConfigurationNameUnique, [true], {})
    name: string;

    @IsNotEmpty()
    @IsString()
    @Validate(IsValidSerialport)
    @Validate(IsArduinoConfigurationPathUnique, [true], {})
    path: string;

    @IsNotEmpty()
    @IsArray()
    @ArrayMaxSize(40)
    serialports: SerialportDto[];
}
