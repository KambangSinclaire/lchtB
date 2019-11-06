import path from "path";

import express from "express";

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

        this.app.route('/liachat/api/user/register').post(validateRegistrationRequest, registrationController.registerUser);
    }


    public userLogin() {
        let loginController = new LoginController();

        let validateLoginRequest = function (req: any, res: any, next: any) {
            new ValidateUserRequests(req, res, next).validateLoginRequest();
        }

        this.app.route('/liachat/api/user/login').post(validateLoginRequest, loginController.authenticateUser);
    }

    public homeRoute() {
        this.app.route('/').get((req, res) => {
            res.sendFile(path.join(__dirname + '/../../../public/index.html'));
        })
    }

}
