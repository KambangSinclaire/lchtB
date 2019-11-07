import * as httpStatus from "http-status-codes";

import { RegKeys } from "../Request Validation/Keys/AuthRegKeys.key";
export const TokenMessageReporter = {


    tokenGenerationError: function (error: any, req: any, res: any, next: any) {
        res.json({
            success: false,
            message: `Registration was unsuccessful. User Token could not be generated for ${req.body.username}. Please validate all fields and try again`,
            errorMessage: error.message,
            status: httpStatus.EXPECTATION_FAILED
        });
    },

    tokenGenerationSuccess: function (user: any, token: any, req: any, res: any, next: any) {
        if (req.body.academicLevel) {
            res.json({
                success: true,
                message: `Registration was successful and User Token was generated for ${req.body.username}. Please make sure to keep token securely`,
                errorMessage: null,
                status: httpStatus.OK,
                registeredStudent: user,
                token: token
            });
            next();
        } else {
            if (req.body.businessCategory) {
                res.json({
                    success: true,
                    message: `Registration was successful and User Token was generated for ${req.body.username}. Please make sure to keep token securely`,
                    errorMessage: null,
                    status: httpStatus.OK,
                    registeredBusinessClient: user,
                    token: token
                });
                next();
            } else {
                res.json({
                    success: true,
                    message: `Registration was successful and User Token was generated for ${req.body.username}. Please make sure to keep token securely`,
                    errorMessage: null,
                    status: httpStatus.OK,
                    registeredDeveloper: user,
                    token: token
                });
                next();
            }
        }
    },

    invalidTokenLength: function (token: any, res: any, next: any) {
        res.json({
            success: false,
            message: `Invalid token length. Expected at least ${RegKeys.MIN_TOKEN_LENGTH} or at most ${RegKeys.MAX_TOKEN_LENGTH} but got ${token.length}`,
            value: token,
            status: httpStatus.UNAUTHORIZED
        });
    },
    nullTokenValue: function (res: any, next: any) {
        res.json({
            success: false,
            message: `Token not provided. It cannot be null`,
            status: httpStatus.UNAUTHORIZED
        });
    },
    invalidTokenType: function (token: any, res: any, next: any) {
        res.json({
            success: false,
            message: `Token has invalid type. Please verify the token type`,
            value: token,
            status: httpStatus.UNAUTHORIZED
        });
    },
    invalidTokenSent: function (token: any, res: any, next: any) {
        res.json({
            success: false,
            message: `Invalid token sent. This Token could not be verified`,
            value: token,
            status: httpStatus.UNAUTHORIZED
        });
    }

}



// let decodedStudentToken = jwt.verify(token, RegKeys.SECRET_STUDENT);
        // if (!decodedStudentToken) {
        //     let decodedBusinessClientToken = jwt.verify(token, RegKeys.SECRET_BUSINESS);
        //     if (!decodedBusinessClientToken) {
        //         let decodedDeveloperToken = jwt.verify(token, RegKeys.SECRET_DEVELOPER);
        //         if (!decodedDeveloperToken) {
        //             TokenMessageReporter.invalidTokenSent(token, res, next);
        //         } else {
        //             next();
        //         }
        //     } else {
        //         next();
        //     }
        // } else {
        //     next();

