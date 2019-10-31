import { RegistrationErrors } from "../Constants/RegistrationErrorMessages";
import { HandleRegistrationErrors } from "../Middlewares/Custom/Error Handling/RegistrationError.middleware";

import { RegistrationAndAuthenticationValidator } from "./RegistrationValidators.validate";

export class LoginRequestValidator {

    private regValFields: RegistrationAndAuthenticationValidator;

    constructor() {
        this.regValFields = new RegistrationAndAuthenticationValidator();
    }

    public validateTokenLength(token: string): boolean {

        return true;
    }

    public verifyAndValidateToken(req: any, res: any) {

    }

    public verifyAndValidateFields(req: any, res: any, next: any) {
        if (!this.regValFields.nameExistenceChecker(req.body.username)) {
            HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.nullUsername(req.body.username), req.body.username);
        } else {
            if (!this.regValFields.nameTypeChecker(req.body.username)) {
                HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidUsernameType(req.body.username), req.body.username);

            } else {
                if (!this.regValFields.nameLengthChecker(req.body.username)) {
                    HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidUsernameLength(req.body.username), req.body.username);
                } else {

                    if (!this.regValFields.passwordExistenceChecker(req.body.password)) {
                        HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.nullPassword(req.body.password), req.body.password);

                    } else {

                        if (!this.regValFields.passwordTypeChecker(req.body.password)) {
                            HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidPasswordType(req.body.password), req.body.password)
                        }
                        else {
                            if (!this.regValFields.passwordLengthChecker(req.body.password)) {
                                HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidPasswordLength(req.body.password), req.body.password);
                            }
                            else {
                                next();
                            }
                        }
                    }
                }
            }
        }
    }

}