import {IsDefined, IsNotEmpty, IsString, Validate, ValidateNested} from "class-validator";
import {IsValidSerialport} from "../../global/validators/is-valid-serialport.validators";
import {Type} from "class-transformer";
import {CreatePinoutDto} from "./create-pinout.dto";

export class CreateArduinoConfigurationDto {
    @IsNotEmpty()
    @IsString()
    @Validate(IsValidSerialport)
    serialport: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsDefined()
    @ValidateNested({ each: true })
    @Type(() => CreatePinoutDto)
    pinouts: CreatePinoutDto[];
}
