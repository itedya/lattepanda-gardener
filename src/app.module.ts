import { Module } from '@nestjs/common';
import { SerialportModule } from "./serialport/serialport.module";
import { ArduinoModule } from "./arduino/arduino.module";

@Module({
  imports: [ArduinoModule, SerialportModule],
})
export class AppModule {}
