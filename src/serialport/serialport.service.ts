import { Injectable } from "@nestjs/common";
import { SerialPort } from "serialport";
import { SerialportDto } from "./dtos/serialport.dto";

@Injectable()
export class SerialportService {
  async getCOMPortList(): Promise<SerialportDto[]> {
    const result = await SerialPort.list();

    return result
        .filter(ele => !! ele.serialNumber)
        .map(ele => new SerialportDto(ele));
  }
}
