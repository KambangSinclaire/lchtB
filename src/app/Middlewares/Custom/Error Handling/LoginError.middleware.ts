import * as httpStatus from "http-status-codes";
export const HandleLoginErrors = {


    loginErrorReporterMiddleware: function (error: any, req: any, res: any, next: any) {
        res.json({
            success: false,
            message: error.message,
            status: httpStatus.BAD_REQUEST
        });
        next();
    },
    loginValidatorErrorReporterMiddleware: function (res: any, message: any, errorField?: any) {
        res.json({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: message,
            value: errorField
        });
    },
    badFormatedRequest: function (res: any, next: any) {
        res.json({
            success: false,
            status: httpStatus.BAD_REQUEST,
            message: `User Category field is not defined.Expected academicLevel or businessCategory or development field but got Undefined`,
        });
        next();
    },
    
}
















