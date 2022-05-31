import {SerialportDto} from "./serialport.dto";
import {ArrayMaxSize, IsArray, IsNotEmpty, IsString, Length, Validate} from "class-validator";
import {IsValidSerialport} from "../../serialport/validators/is-valid-serialport.validator";
import {IsArduinoConfigurationNameUnique} from "../validators/is-arduino-configuration-name-unique.validator";
import {IsArduinoConfigurationPathUnique} from "../validators/is-arduino-configuration-path-unique.validator";

export class CreateArduinoConfigurationDto {
    @IsNotEmpty()
    @IsString()
    @Length(3, 64)
    @Validate(IsArduinoConfigurationNameUnique)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Validate(IsValidSerialport)
    @Validate(IsArduinoConfigurationPathUnique)
    path: string;

    @IsNotEmpty()
    @IsArray()
    @ArrayMaxSize(40)
    serialports: SerialportDto[];
}
