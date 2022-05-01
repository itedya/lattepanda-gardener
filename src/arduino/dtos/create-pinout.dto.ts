import { OmitType } from "@nestjs/mapped-types";
import { PinoutDto } from "./pinout.dto";

export class CreatePinoutDto extends OmitType(PinoutDto, ["id"] as const) {
}
