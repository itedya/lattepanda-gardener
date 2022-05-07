import {BadRequestException} from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export class ArduinoConfigurationWithThatIdDoesNotExist extends BadRequestException {
    constructor() {
        super("Arduino Configuration with that id does not exist!");
    }

    public static isInstanceOf(err: Error) {
        if (! (err instanceof PrismaClientKnownRequestError)) return false;
        if (err.code !== "P2025") return false;

        return true;
    }
}
