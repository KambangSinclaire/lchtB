
import { AuthRequestValidator } from "../../../../Validators/AuthRequestValidator.validate";
import { RegistrationAndAuthenticationValidator } from "../../../../Validators/RegistrationValidators.validate";

export class ValidateUserRequests {


    private requestValidator: RegistrationAndAuthenticationValidator

    constructor(private req: any, private res: any, private next: any) {
        console.log("Entered validators middleware");
        this.requestValidator = new RegistrationAndAuthenticationValidator();
    }


    public validateRegistrationRequest() {
        this.requestValidator.verifyAndValidateRegistrationRequest(this.req, this.res, this.next);
        return;
    }

    public validateLoginRequest() {
        new AuthRequestValidator().verifyAndValidateFields(this.req, this.res, this.next);
        return;
    }



}
