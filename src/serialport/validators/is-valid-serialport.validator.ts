import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from "class-validator";
import {SerialPort} from "serialport";

@ValidatorConstraint({ name: "IsValidSerialport", async: true })
export class IsValidSerialport implements ValidatorConstraintInterface {
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        return SerialPort.list().then(res => res.map(ele => ele.path).includes(value));
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return validationArguments.property + " must be a valid serialport identifier.";
    }
}
