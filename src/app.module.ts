import {Module} from '@nestjs/common';
import {SerialportModule} from "./serialport/serialport.module";
import {ArduinoModule} from "./arduino/arduino.module";
import {ConfigModule} from "./config/config.module";
import {ArduinoConfigurationModule} from "./arduino-configuration/arduino-configuration.module";
import {DatabaseModule} from "./database/database.module";

@Module({
    imports: [
        ConfigModule,
        DatabaseModule,
        ArduinoConfigurationModule,
        ArduinoModule,
        SerialportModule
    ],
})
export class AppModule {
}
