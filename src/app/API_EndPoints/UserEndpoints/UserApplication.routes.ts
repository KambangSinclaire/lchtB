import express from "express"
import { AuthRequestValidator } from "../../Validators/AuthRequestValidator.validate";
import { UserRoutesController } from "../../Controllers/UserControllers/UserRoutes.controller";

export class UserApplicationRoutes {


    constructor(private app: express.Application) {

    }
    public getAllLoggedUsers() {
        const userRoutesController = new UserRoutesController();
        const authValidator = (req: any, res: any, next: any) => {
            new AuthRequestValidator().validateAndVerifyToken(req, res, next);
        }
        this.app.route('/api/users/:category').get(authValidator, userRoutesController.getAllLoggedInUsers);
    }



}
