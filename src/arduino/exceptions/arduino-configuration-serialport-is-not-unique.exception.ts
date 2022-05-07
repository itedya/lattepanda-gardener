import {BadRequestException} from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export class ArduinoConfigurationSerialportIsNotUniqueException extends BadRequestException {
    constructor() {
        super("Arduino Configuration serialport is not unique!");
    }

    public static isInstanceOf(err: Error) {
        if (! (err instanceof PrismaClientKnownRequestError)) return false;
        if (err.code !== "P2002") return false;
        if (! err.message.includes("serialport")) return false;

        return true;
    }
}
