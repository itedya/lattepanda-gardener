import { Module } from '@nestjs/common';
import { SerialportModule } from "./serialport/serialport.module";
import { ArduinoModule } from "./arduino/arduino.module";
import {ConfigModule} from "./config/config.module";

@Module({
  imports: [ConfigModule, ArduinoModule, SerialportModule],
})
export class AppModule {}
