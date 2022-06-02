import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from "class-validator";
import {ArduinoConfigurationService} from "../arduino-configuration.service";

@ValidatorConstraint({async: true})
export class IsArduinoConfigurationNameUnique implements ValidatorConstraintInterface {
    constructor(private arduinoConfigurationService: ArduinoConfigurationService) {
    }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const searched = this.arduinoConfigurationService.firstByName(value);

        const constraints = validationArguments.constraints;

        const updateSwitch = (constraints !== undefined && constraints.length == 1) ? constraints[0] : false;

        if (updateSwitch) {
            if (searched === undefined) return true;
            console.log(searched, validationArguments.object["uuid"]);

            return searched.uuid === validationArguments.object["uuid"];
        }

        return searched === undefined;
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return "Arduino Configuration with that name already exists!";
    }
}
