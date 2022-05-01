export class PinoutDto {
  constructor(data: Partial<PinoutDto>) {
  }

  id: number;
  sensorPin: number;
  valvePin: number;
  arduinoConfigurationId: number;
}
