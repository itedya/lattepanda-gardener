import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from "class-validator";
import {ArduinoConfigurationService} from "../arduino-configuration.service";

@ValidatorConstraint({name: "IsArduinoConfigurationNameUnique", async: true})
export class IsArduinoConfigurationNameUnique implements ValidatorConstraintInterface {
    constructor(private arduinoConfigurationService: ArduinoConfigurationService) {
    }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        return this.arduinoConfigurationService.firstByName(value) === undefined;
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return "Arduino Configuration with that name already exists!";
    }
}
