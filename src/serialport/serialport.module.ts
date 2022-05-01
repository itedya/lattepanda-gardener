import { Module } from "@nestjs/common";
import { SerialportService } from "./serialport.service";
import { SerialportController } from "./serialport.controller";

@Module({
  controllers: [SerialportController],
  providers: [SerialportService]
})
export class SerialportModule {

}
