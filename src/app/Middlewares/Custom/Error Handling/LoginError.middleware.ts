import * as httpStatus from "http-status-codes";

import { PasswordHandler } from "../../../Validators/PasswordHandler.validate";
export const HandleLoginErrors = {


    loginErrorReporterMiddleware: function (error: any, req: any, res: any, next: any) {
        res.json({
            success: false,
            message: error.message,
            status: httpStatus.BAD_REQUEST
        });
        // next();
    },



    loginValidatorErrorReporterMiddleware: function (res: any, message: any, errorField?: any) {
        res.json({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: message,
            value: errorField
        });
    },



    verifyLoggedInUsername: function (user: any, userModel: any, req: any, res: any) {
        if (user == null) {
            res.json({
                success: false,
                message: `Invalid username sent. Username doesn't exist. Make sure you correctly spelt the username`,
                status: httpStatus.BAD_REQUEST
            });
        } else {
            this.verifyLoggedInPassword(user, userModel, req, res);
        }
    },



    verifyLoggedInPassword: function (user: any, userModel: any, req: any, res: any) {
        const passwordHandler = new PasswordHandler();
        if (passwordHandler.decryptAndComparePasswords(req.body.password, user.password)) {
            //Set the user logged in as true in
            userModel.findOneAndUpdate({ username: req.body.username }, { loggedIn_Status: true }, (error: any, authUser: any) => {
                if (error) {
                    res.json({
                        success: false,
                        message: `User logged-in status could not be set`,
                        status: httpStatus.EXPECTATION_FAILED
                    });
                } else {
                    res.json({
                        success: true,
                        message: `User was successfully authenticated`,
                        status: httpStatus.OK,
                        user: authUser
                    });
                }
            });
        } else {
            res.json({
                success: false,
                message: `Invalid Password sent. User password doesn't match. Make sure you entered the password correctly`,
                status: httpStatus.BAD_REQUEST
            });
        }
    },



    badFormatedRequest: function (res: any, next: any) {
        res.json({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: `User Category field is not defined.Expected academicLevel or businessCategory or development field but got Undefined`,
        });
    },



}
















