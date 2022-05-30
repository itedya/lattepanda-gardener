import {
  ClassSerializerInterceptor,
  Controller,
  UseInterceptors
} from "@nestjs/common";

@UseInterceptors(ClassSerializerInterceptor)
@Controller("/api/arduino")
export class ArduinoController {
}
