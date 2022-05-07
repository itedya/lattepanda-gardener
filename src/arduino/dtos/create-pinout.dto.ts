import {IsNotEmpty, IsNumber} from "class-validator";

export class CreatePinoutDto {
    @IsNotEmpty()
    @IsNumber()
    valvePin: number;

    @IsNotEmpty()
    @IsNumber()
    sensorPin: number;
}
