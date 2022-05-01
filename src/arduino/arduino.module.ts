import { Module } from "@nestjs/common";
import { ArduinoController } from "./arduino.controller";
import { ArduinoService } from "./arduino.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [ArduinoController],
  providers: [ArduinoService]
})
export class ArduinoModule {}
