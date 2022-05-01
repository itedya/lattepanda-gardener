import { PinoutDto } from "./pinout.dto";

export class ArduinoConfigurationDto {
  constructor(data: Partial<ArduinoConfigurationDto>) {
    Object.assign(this, data)
  }

  id: number;
  serialportPath: string;
  friendlyName: string;
  pinouts: PinoutDto[];
}
