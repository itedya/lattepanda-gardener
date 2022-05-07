import {CreatePinoutDto} from "./create-pinout.dto";
import {IsInt, IsNotEmpty} from "class-validator";

export class UpdatePinoutDto extends CreatePinoutDto{
    @IsNotEmpty()
    @IsInt()
    id: number;
}
