import {Exclude} from "class-transformer";

export class PinoutDto {
  constructor(data: Partial<PinoutDto>) {
    if (data.id) this.id = data.id;
    if (data.sensorPin) this.sensorPin = data.sensorPin;
    if (data.valvePin) this.valvePin = data.valvePin;
    if (data.arduinoConfigurationId) this.arduinoConfigurationId = data.arduinoConfigurationId;
  }

  @Exclude()
  id: number;
  sensorPin: number;
  valvePin: number;
  @Exclude()
  arduinoConfigurationId: number;
}
