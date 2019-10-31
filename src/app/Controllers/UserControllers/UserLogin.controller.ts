import { Request, Response } from "express";

import mongoose from "mongoose";

import { HandleLoginErrors } from "../../Middlewares/Custom/Error Handling/LoginError.middleware";
import { StudentRegModel } from "../../Models/UserModels/StudentRegistration.model";

const students = mongoose.model("students", StudentRegModel);

export class LoginController {


    public authenticateUser(req: Request, res: Response, next: any) {
        const username = req.body.username;

        students.findOne({ username: username }, (error, user) => {
            if (error) {
                HandleLoginErrors.loginErrorReporterMiddleware(error, req, res, next);
            } else {
                res.json(user);
            }
        });
        return;
    }
}