import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from "class-validator";
import {ArduinoConfigurationService} from "../arduino-configuration.service";

@ValidatorConstraint({name: "DoesArduinoConfigurationUuidExist", async: true})
export class DoesArduinoConfigurationUuidExist implements ValidatorConstraintInterface {
    constructor(private arduinoConfigurationService: ArduinoConfigurationService) {
    }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        return this.arduinoConfigurationService.firstByUuid(value) === undefined;
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return "Arduino Configuration with that name already exists!";
    }
}
