import { Injectable } from "@nestjs/common";
import { SerialPort } from "serialport";
import { SerialportDto } from "./dtos/serialport.dto";

@Injectable()
export class SerialportService {
  async getCOMPortList(): Promise<SerialportDto[]> {
    const result = await SerialPort.list();

    return result.map(ele => new SerialportDto(ele));
  }
}
