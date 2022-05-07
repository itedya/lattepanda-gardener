import {BadRequestException} from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export class ArduinoConfigurationNameIsNotUniqueException extends BadRequestException {
    constructor() {
        super("Arduino Configuration name is not unique!");
    }

    public static isInstanceOf(err: Error) {
        if (! (err instanceof PrismaClientKnownRequestError)) return false;
        if (err.code !== "P2002") return false;
        if (! err.message.includes("name")) return false;

        return true;
    }
}
