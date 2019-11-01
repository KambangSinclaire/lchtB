import { Request, Response } from "express";

import mongoose from "mongoose";

import { HandleLoginErrors } from "../../Middlewares/Custom/Error Handling/LoginError.middleware";
import { BusinessOwnerRegModel } from "../../Models/UserModels/BusinessOwnerReg.model";
import { DeveloperRegModel } from "../../Models/UserModels/DeveloperRegistration.model";
import { StudentRegModel } from "../../Models/UserModels/StudentRegistration.model";

const students = mongoose.model("students", StudentRegModel);
const businessClient = mongoose.model("businessClients", BusinessOwnerRegModel);
const developer = mongoose.model("developers", DeveloperRegModel);

export class LoginController {


    public authenticateUser(req: Request, res: Response, next: any) {
        const username = req.body.username;
        console.log(username);
        console.log(req.body.tokenId.data.tokenId);
        console.log("That is it up there");

        if (req.body.tokenId.data.tokenId === "student") {
            students.findOne({ username: username }, (error, user) => {
                if (error) {
                    HandleLoginErrors.loginErrorReporterMiddleware(error, req, res, next);
                } else {
                    res.json(user);
                }
            });
            return;
        } else {
            if (req.body.tokenId.data.tokenId === "businessClient") {
                businessClient.findOne({ username: username }, (error, user) => {
                    if (error) {
                        HandleLoginErrors.loginErrorReporterMiddleware(error, req, res, next);
                    } else {
                        res.json(user);
                    }
                });
                return;
            } else {
                if (req.body.tokenId.data.tokenId === "developer") {
                    developer.findOne({ username: username }, (error, user) => {
                        if (error) {
                            HandleLoginErrors.loginErrorReporterMiddleware(error, req, res, next);
                        } else {
                            res.json(user);
                        }
                    });
                    return;
                }
            }
        }

    }
}