import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from "class-validator";
import {ArduinoConfigurationService} from "../arduino-configuration.service";

@ValidatorConstraint({name: "IsArduinoConfigurationPathUnique", async: true})
export class IsArduinoConfigurationPathUnique implements ValidatorConstraintInterface {
    constructor(private arduinoConfigurationService: ArduinoConfigurationService) {
    }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        return this.arduinoConfigurationService.firstByPath(value) === undefined;
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return "Arduino Configuration with that path already exists!";
    }
}
