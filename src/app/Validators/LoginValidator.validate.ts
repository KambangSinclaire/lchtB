import * as jwt from "jsonwebtoken";

import * as httpStatus from "http-status-codes";

import { RegistrationErrors } from "../Constants/RegistrationErrorMessages";
import { TokenMessageReporter } from "../Middlewares/Custom/Error Handling/TokenMessages";
import { HandleRegistrationErrors } from "../Middlewares/Custom/Error Handling/RegistrationError.middleware";
import { RegKeys } from "../Middlewares/Custom/Request Validation/Keys/AuthRegKeys.key";

import { RegistrationAndAuthenticationValidator } from "./RegistrationValidators.validate";

export class LoginRequestValidator {

    private requiredLoginFields: RegistrationAndAuthenticationValidator;

    constructor() {
        this.requiredLoginFields = new RegistrationAndAuthenticationValidator();
    }

    public validateTokenLength(token: string): boolean {

        if (token.length < RegKeys.MIN_TOKEN_LENGTH || token.length > RegKeys.MAX_TOKEN_LENGTH) {
            return false;
        } else {
            return true;
        }
    }

    public validateTokenType(token: string): boolean {
        if (typeof token != "string") {
            return false;
        } else {
            return true;
        }
    }

    public validateTokenExistence(token: string): boolean {
        if (token == undefined || token == null) {
            return false
        } else {
            return true;
        }
    }


    public verifyToken(token: string, req: any, res: any, next: any) {
        jwt.verify(token, RegKeys.SECRET_STUDENT, (error, decoded1Token) => {
            if (error) {
                jwt.verify(token, RegKeys.SECRET_BUSINESS, (error, decoded2Token) => {
                    if (error) {
                        jwt.verify(token, RegKeys.SECRET_DEVELOPER, (error, decoded3Token) => {
                            if (error) {
                                TokenMessageReporter.invalidTokenSent(decoded3Token, res, next);
                            } else {
                                req.body.tokenId = decoded3Token;
                                next();
                            }
                        });
                    } else {
                        req.body.tokenId = decoded2Token;
                        next();
                    }
                });
            } else {
                req.body.tokenId = decoded1Token;
                next();
            }
        });
    }


    public validateAndVerifyToken(req: any, res: any, next: any) {
        const token = req.headers['x-access-token'];

        if (!this.validateTokenExistence(token)) {
            TokenMessageReporter.nullTokenValue(res, next);
        } else {
            if (!this.validateTokenType(token)) {
                TokenMessageReporter.invalidTokenType(token, res, next);
            } else {
                if (!this.validateTokenLength(token)) {
                    TokenMessageReporter.invalidTokenLength(token, res, next);
                } else {
                    this.verifyToken(token, req, res, next);
                }
            }
        }
    }


    public preLoginCheck(tokenUsername: string, requestBodyUsername: string, res: any) {
        if (tokenUsername === requestBodyUsername) {
            return true;
        } else {
            res.json({
                success: false,
                message: `Invalid username sent. Username doesn't exist. Make sure you correctly spelt the username`,
                status: httpStatus.BAD_REQUEST
            });
        }
    }


    public verifyAndValidateFields(req: any, res: any, next: any) {
        if (!this.requiredLoginFields.nameExistenceChecker(req.body.username)) {
            HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.nullUsername(req.body.username), req.body.username);
        } else {
            if (!this.requiredLoginFields.nameTypeChecker(req.body.username)) {
                HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidUsernameType(req.body.username), req.body.username);

            } else {
                if (!this.requiredLoginFields.nameLengthChecker(req.body.username)) {
                    HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidUsernameLength(req.body.username), req.body.username);
                } else {

                    if (!this.requiredLoginFields.passwordExistenceChecker(req.body.password)) {
                        HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.nullPassword(req.body.password), req.body.password);

                    } else {

                        if (!this.requiredLoginFields.passwordTypeChecker(req.body.password)) {
                            HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidPasswordType(req.body.password), req.body.password)
                        }
                        else {
                            if (!this.requiredLoginFields.passwordLengthChecker(req.body.password)) {
                                HandleRegistrationErrors.requestErrorReporterMiddleware(res, RegistrationErrors.invalidPasswordLength(req.body.password), req.body.password);
                            }
                            else {
                                this.validateAndVerifyToken(req, res, next);
                            }
                        }
                    }
                }
            }
        }
    }

}