import * as httpStatus from "http-status-codes";
export const TokenMessageReporter = {


    tokenGenerationError: function (error: any, req: any, res: any, next: any) {
        res.json({
            success: false,
            message: `Registration was unsuccessful. User Token could not be generated for ${req.body.username}. Please validate all fields and try again`,
            errorMessage: error.message,
            status: httpStatus.EXPECTATION_FAILED
        });
        next();
    },

    tokenGenerationSuccess: function (user: any, token: any, req: any, res: any, next: any) {
        if (req.body.academicLevel) {
            res.json({
                success: true,
                message: `Registration was successful and User Token was generated for ${req.body.username}. Please make sure to keep token securely`,
                errorMessage: null,
                status: httpStatus.OK,
                registeredStudent: user,
                token: token,
                TOKEN_LEN: token.length
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
    }
}