import path from "path";

import express from "express";

import { LoginRequestValidator } from "../../Validators/LoginValidator.validate";
import { LogOutController } from "../../Controllers/UserControllers/UserLogOut.controller";
import { LoginController } from "../../Controllers/UserControllers/UserLogin.controller";
import { RegistrationController } from "../../Controllers/UserControllers/UserRegistration.controller";
import { ValidateUserRequests } from "../../Middlewares/Custom/Request Validation/User Registration Request Validation/ValidateUserRequests.middleware";


export class RegistrationAndAuthenticationRoutes {


    constructor(private app: express.Application) {
    }

    public userRegistration() {
        let registrationController = new RegistrationController();

        let validateRegistrationRequest = function (req: any, res: any, next: any) {
            new ValidateUserRequests(req, res, next).validateRegistrationRequest();
        }

        this.app.route('/api/user/register').post(validateRegistrationRequest, registrationController.registerUser);
    }


    public userLogin() {
        let loginController = new LoginController();
        let validateLoginRequest = function (req: any, res: any, next: any) {
            new ValidateUserRequests(req, res, next).validateLoginRequest();
        }
        this.app.route('/api/user/login').post(validateLoginRequest, loginController.authenticateUser);
    }

    public userLogOut() {
        let logOutController = new LogOutController();
        let validateLogOutRequest = function (req: any, res: any, next: any) {
            new LoginRequestValidator().validateAndVerifyToken(req, res, next);
        }
        this.app.route('/api/user/logOut').post(validateLogOutRequest, logOutController.logOutUser);
    }



    public homeRoute() {
        this.app.route('/').get((req, res) => {
            res.sendFile(path.join(__dirname + '/../../../../build/public/index.html'));
        })
    }



}
