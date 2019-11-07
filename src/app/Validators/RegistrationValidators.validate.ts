
import { RegistrationErrors } from "../Constants/RegistrationErrorMessages";
import { ValidFieldLengths } from "../Constants/UserInputLengths";
import { HandleRegistrationErrors } from "../Middlewares/Custom/Error Handling/RegistrationError.middleware";

export class RegistrationAndAuthenticationValidator {

    /* VALIDATORS FOR ALL CLIENT REGISTRATION REQUESTS */



    /* VALIDATORS FOR USERNAME FIELD */
    public nameLengthChecker(username: string): boolean {
        if (username.length < ValidFieldLengths.MIN_USERNAME_LENGTH || username.length > ValidFieldLengths.MAX_USERNAME_LENGTH) {
            return false
        } else {
            return true;
        }
    }


    public nameExistenceChecker(name: string): boolean {

        if (!name)
            return false;
        else
            return true;
    }

    public nameTypeChecker(username: string) {
        if (typeof username != "string") {
            return false;
        } else {
            return true;
        }
    }
    /* END OF VALIDATORS FOR USERNAME FIELD */



    /* VALIDATORS FOR PASSWORD FIELD */
    public passwordLengthChecker(password: string): boolean {
        if (password.length < ValidFieldLengths.MIN_PASSWORD_LENGTH || password.length > ValidFieldLengths.MAX_PASSWORD_LENGTH) {
            return false
        } else {
            return true;
        }
    }

    public passwordExistenceChecker(password: string): boolean {
        if (!password)
            return false;
        else
            return true;
    }

    public passwordTypeChecker(password: string) {
        if (typeof password != "string") {
            return false;
        } else {
            return true;
        }
    }
    /* END OF VALIDATORS FOR PASSWORD FIELD */


    /* VALIDATORS FOR EMAIL FIELD */
    public emailLengthChecker(email: string): boolean {
        if (email.length < ValidFieldLengths.MIN_EMAIL_LENGTH || email.length > ValidFieldLengths.MAX_EMAIL_LENGTH) {
            return false
        } else {
            return true;
        }
    }

    public emailExistenceChecker(email: string): boolean {
        if (!email)
            return false;
        else
            return true;
    }

    public emailTypeChecker(email: string) {
        if (typeof email != "string") {
            return false;
        } else {
            return true;
        }
    }
    /* END OF VALIDATORS FOR EMAIL FIELD */


    /* VALIDATORS FOR PHONE NUMBER FIELD */
    public phoneLengthChecker(phone: string): boolean {
        if (phone.length < ValidFieldLengths.MIN_PHONE_LENGTH || phone.length > ValidFieldLengths.MAX_PHONE_LENGTH) {
            return false
        } else {
            return true;
        }
    }


    public phoneExistenceChecker(phone: string): boolean {
        if (!phone)
            return false;
        else
            return true;
    }


    public phoneTypeChecker(phone: number) {
        if (typeof phone != "number") {
            return false;
        } else {
            return true;
        }
    }
    /* END OF VALIDATORS FOR PHONE NUMBER FIELD */



    validateEmailFormat(email: string): boolean {
        const Expression = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (Expression.test(email)) {
            return true;
        } else {
            return false;
        }
    }

    validateUsernameFormat(username: string) {
        const Expression = new RegExp(/^[a-zA-Z0-9]+$/);
        if (Expression.test(username)) {
            return true;
        } else {
            return false;
        }
    }

    validatePasswordFormat(password: string) {
        const Expression = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\W]).{5,200}$/);
        if (Expression.test(password)) {
            return true;
        } else {
            return false;
        }
    }




    /* VALIDATORS FOR ACADEMIC LEVEL FIELD */
    public academicLevelLengthChecker(academicLevel: string): boolean {
        if (academicLevel.length < ValidFieldLengths.MIN_ACADEMIC_CATEGORY_LENGTH || academicLevel.length > ValidFieldLengths.MAX_ACADEMIC_CATEGORY_LENGTH) {
            return false
        } else {
            return true;
        }
    }

    public academicLevelExistenceChecker(academicLevel: string): boolean {
        if (!academicLevel)
            return false;
        else
            return true;
    }

    public academicLevelTypeChecker(academicLevel: string) {
        if (typeof academicLevel != "string") {
            return false;
        } else {
            return true;
        }
    }
    /* END OF VALIDATORS FOR ACADEMIC LEVEL FIELD */


    /* VALIDATORS FOR BUSINESS CATEGORY FIELD */
    public businessCategoryExistenceChecker(businessCategory: string): boolean {
        if (!businessCategory)
            return false;
        else
            return true;
    }

    public businessCategoryLengthChecker(businessCategory: string): boolean {
        if (businessCategory.length < ValidFieldLengths.MIN_BUSINESS_CATEGORY_LENGTH || businessCategory.length > ValidFieldLengths.MAX_BUSINESS_CATEGORY_LENGTH) {
            return false
        } else {
            return true;
        }
    }


    public businessCategoryTypeChecker(businessCategory: string) {
        if (typeof businessCategory != "string") {
            return false;
        } else {
            return true;
        }
    }
    /* END OF VALIDATORS FOR BUSINESS CATEGORY FIELD */


    /* VALIDATORS FOR DEVELOPMENT FIELD */
    public developmentFieldExistenceChecker(developmentField: string): boolean {
        if (!developmentField)
            return false;
        else
            return true;
    }

    public developmentFieldLengthChecker(developmentField: string): boolean {
        if (developmentField.length < ValidFieldLengths.MIN_DEVELOPMENT_FIELD_LENGTH || developmentField.length > ValidFieldLengths.MAX_DEVELOPMENT_FIELD_LENGTH) {
            return false
        } else {
            return true;
        }
    }

    public developmentFieldTypeChecker(developmentField: string) {
        if (typeof developmentField != "string") {
            return false;
        } else {
            return true;
        }
    }
    /* END OF VALIDATORS FOR DEVELOPMENT FIELD */


    //Implementing validation for phone number
    public validateOptionalPhoneNumberField(req: any, res: any): boolean {

        if (req.body.phone != undefined) {
            if (!this.phoneExistenceChecker(req.body.phone)) {
                HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.nullPhone(req.body.phone), req.body.phone);

            } else {
                if (!this.phoneTypeChecker(req.body.phone)) {
                    HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidPhoneType(req.body.phone), req.body.phone);
                }
                else {
                    if (!this.phoneLengthChecker(req.body.phone)) {
                        HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidPhoneLength(req.body.phone), req.body.phone);
                    } else {
                        return true;
                    }
                }
            }
        }

        return false;
    }



    public validateOptionalEmailField(req: any, res: any): boolean {

        if (req.body.email != undefined) {
            if (!this.emailExistenceChecker(req.body.email)) {
                HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.nullEmail(req.body.email), req.body.email);

            } else {
                if (!this.emailTypeChecker(req.body.email)) {
                    HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidEmailType(req.body.email), req.body.email);
                }
                else {
                    if (!this.emailLengthChecker(req.body.email)) {
                        HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidEmailLength(req.body.email), req.body.email);
                    } else {
                        if (!this.validateEmailFormat(req.body.email)) {
                            console.log('passed in format ckecker');
                            HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidEmailFormat(req.body.email), req.body.email);

                        } else {
                            return true;
                        }
                    }
                }
            }
        }

        return false;
    }



    public verifyAndValidateCompulsoryFields(req: any, res: any): boolean {
        if (!this.nameExistenceChecker(req.body.username)) {
            HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.nullUsername(req.body.username), req.body.username);
            return false;
        } else {
            if (!this.nameTypeChecker(req.body.username)) {
                HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidUsernameType(req.body.username), req.body.username);
                return false;

            } else {
                if (!this.nameLengthChecker(req.body.username)) {
                    HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidUsernameLength(req.body.username), req.body.username);
                    return false;
                } else {
                    if (!this.validateUsernameFormat(req.body.username)) {
                        HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidUsernameFormat(req.body.username), req.body.username);
                        return false;
                    } else {
                        if (!this.passwordExistenceChecker(req.body.password)) {
                            HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.nullPassword(req.body.password), req.body.password);
                            return false;

                        } else {

                            if (!this.passwordTypeChecker(req.body.password)) {
                                HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidPasswordType(req.body.password), req.body.password)
                                return false;
                            }
                            else {
                                if (!this.passwordLengthChecker(req.body.password)) {
                                    HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidPasswordLength(req.body.password), req.body.password);
                                    return false;
                                }
                                else {
                                    if (!this.validatePasswordFormat(req.body.password)) {
                                        HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidPasswordFormat(req.body.password), req.body.password);
                                        return false;
                                    } else {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    public verifyAndValidateRegistrationRequest(req: any, res: any, next: any) {

        if (this.verifyAndValidateCompulsoryFields(req, res)) {

            if (req.body.academicLevel != undefined) {

                if (!this.academicLevelExistenceChecker(req.body.academicLevel)) {
                    HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.nullAcademicLevel(req.body.academicLevel), req.body.academicLevel);
                } else {
                    if (!this.academicLevelTypeChecker(req.body.academicLevel)) {
                        HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidAcademicLevelType(req.body.academicLevel), req.body.academicLevel);
                    } else {
                        if (!this.academicLevelLengthChecker(req.body.academicLevel)) {
                            HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidAcademicLevelLength(req.body.academicLevel), req.body.academicLevel);
                        } else {
                            if (this.validateOptionalEmailField(req, res) || !this.validateOptionalEmailField(req, res)) {
                                if (this.validateOptionalPhoneNumberField(req, res) || !this.validateOptionalPhoneNumberField(req, res)) {
                                    //register here
                                    next();
                                }
                            }

                        }
                    }
                }
            } else {
                if (req.body.businessCategory != undefined) {
                    if (!this.businessCategoryExistenceChecker(req.body.businessCategory)) {
                        HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.nullBusinessCategory(req.body.businessCategory), req.body.businessCategory);
                    } else {
                        if (!this.businessCategoryTypeChecker(req.body.businessCategory)) {
                            HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidBusinessCategoryType(req.body.businessCategory), req.body.businessCategory);
                        } else {
                            if (!this.businessCategoryLengthChecker(req.body.businessCategory)) {
                                HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidBusinessCategoryLength(req.body.businessCategory), req.body.businessCategory);
                            } else {
                                if (this.validateOptionalPhoneNumberField(req, res)) {
                                    next();

                                } else {
                                    //Verify this again
                                    if (this.validateOptionalEmailField(req, res) || !this.validateOptionalEmailField(req, res))
                                        //register here
                                        next();
                                }
                            }
                        }
                    }
                }
                else {
                    if (req.body.developmentField != undefined) {

                        if (!this.developmentFieldExistenceChecker(req.body.developmentField)) {
                            HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.nullDevelopmentField(req.body.developmentField), req.body.developmentField);
                        } else {
                            if (!this.developmentFieldTypeChecker(req.body.developmentField)) {
                                HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidDevelopmentFieldType(req.body.developmentField), req.body.developmentField);
                            } else {
                                if (!this.developmentFieldLengthChecker(req.body.developmentField)) {
                                    HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidDevelopmentFieldLength(req.body.developmentField), req.body.developmentField);
                                } else {
                                    if (this.validateOptionalEmailField(req, res) && this.validateOptionalPhoneNumberField(req, res)) {
                                        next();
                                    } else {
                                        console.log("Error occurred");

                                    }
                                }
                            }
                        }
                    } else {
                        HandleRegistrationErrors.badFormatedRequest(res, next);

                    }
                }
            }
        }


    }


}