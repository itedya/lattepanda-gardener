import { Controller, Get } from "@nestjs/common";
import { SerialportService } from "./serialport.service";
import { SerialportDto } from "./dtos/serialport.dto";

@Controller("/api/serialport")
export class SerialportController {
  constructor(private serialportService: SerialportService) {
  }

  @Get("/")
  async listSerialport(): Promise<SerialportDto[]> {
    return this.serialportService.getCOMPortList()
      .then(res => res.map(ele => new SerialportDto(ele)));
  }
}
