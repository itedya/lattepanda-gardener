import { IsNotEmpty, IsString } from "class-validator";

export class CreateArduinoConfigurationRequest {
  @IsNotEmpty()
  @IsString()

  serialportPath: string;

  pinouts: Array<{ sensorPin: number, valvePin: number }>;
}
