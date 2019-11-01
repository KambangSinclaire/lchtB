import { Request, Response } from "express";

import mongoose from "mongoose";

import { LoginRequestValidator } from "../../Validators/LoginValidator.validate";
import { HandleLoginErrors } from "../../Middlewares/Custom/Error Handling/LoginError.middleware";
import { BusinessOwnerRegModel } from "../../Models/UserModels/BusinessOwnerReg.model";
import { DeveloperRegModel } from "../../Models/UserModels/DeveloperRegistration.model";
import { StudentRegModel } from "../../Models/UserModels/StudentRegistration.model";

const students = mongoose.model("students", StudentRegModel);
const businessClient = mongoose.model("businessClients", BusinessOwnerRegModel);
const developer = mongoose.model("developers", DeveloperRegModel);

export class LoginController {


    public authenticateUser(req: Request, res: Response, next: any) {


        if (new LoginRequestValidator().preLoginCheck(req.body.tokenId.data.username, req.body.username, res)) {

            const username = req.body.tokenId.data.username;

            if (req.body.tokenId.data.tokenId === "student") {
                students.findOne({ username: username }, (error, user) => {
                    if (error) {
                        HandleLoginErrors.loginErrorReporterMiddleware(error, req, res, next);
                    } else {
                        HandleLoginErrors.invalidLoginUsername(user, req, res);
                    }
                });
                return;
            } else {
                if (req.body.tokenId.data.tokenId === "businessClient") {
                    businessClient.findOne({ username: username }, (error, user) => {
                        if (error) {
                            HandleLoginErrors.loginErrorReporterMiddleware(error, req, res, next);
                        } else {
                            HandleLoginErrors.invalidLoginUsername(user, req, res);
                        }
                    });
                    return;
                } else {
                    if (req.body.tokenId.data.tokenId === "developer") {
                        developer.findOne({ username: username }, (error, user) => {
                            if (error) {
                                HandleLoginErrors.loginErrorReporterMiddleware(error, req, res, next);
                            } else {
                                HandleLoginErrors.invalidLoginUsername(user, req, res);
                            }
                        });
                        return;
                    }
                }
            }

        }
    }


}