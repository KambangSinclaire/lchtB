import mongoose from "mongoose";

import { HandleLoginErrors } from "../../Middlewares/Custom/Error Handling/LoginError.middleware";
import { BusinessOwnerRegModel } from "../../Models/UserModels/BusinessOwnerReg.model";
import { DeveloperRegModel } from "../../Models/UserModels/DeveloperRegistration.model";
import { StudentRegModel } from "../../Models/UserModels/StudentRegistration.model";


const students = mongoose.model("students", StudentRegModel);
const developer = mongoose.model("developers", DeveloperRegModel);
const businessClient = mongoose.model("businessClient", BusinessOwnerRegModel);
export class UserRoutesController {

    public getAllLoggedInUsers(req: any, res: any, next: any) {

        if (req.body.tokenId.data.tokenId === "student" && req.params.category === "students") {
            students.find({ loggedIn_Status: true }, (error, user) => {
                if (error) {
                    HandleLoginErrors.loginErrorReporterMiddleware(error, req, res, next);
                } else {
                    res.json(user)
                }
            });
            return;
        } else {
            if (req.body.tokenId.data.tokenId === "businessClients" && req.params.category === "businessClient") {
                businessClient.find({ loggedIn_Status: true }, (error, user) => {
                    if (error) {
                        HandleLoginErrors.loginErrorReporterMiddleware(error, req, res, next);
                    } else {
                        res.json(user);
                    }
                });
                return;
            } else {
                if (req.body.tokenId.data.tokenId === "developer" && req.params.category === "developers") {
                    developer.find({ loggedIn_Status: true }, (error, user) => {
                        if (error) {
                            HandleLoginErrors.loginErrorReporterMiddleware(error, req, res, next);
                        } else {
                            res.json(user);
                        }
                    });
                    return;
                } else {
                    res.json({
                        success: false,
                        message: `Invalid Parameter passed to the request url. Parameter passed could not be authenticated with the token.`,
                        url: `${req.url}`
                    })
                }
            }
        }

    }





}