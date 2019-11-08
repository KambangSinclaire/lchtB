import { Request, Response } from "express";

import mongoose from "mongoose";

import * as httpStatus from 'http-status-codes';

import { BusinessOwnerRegModel } from "../../Models/UserModels/BusinessOwnerReg.model";
import { DeveloperRegModel } from "../../Models/UserModels/DeveloperRegistration.model";
import { StudentRegModel } from "../../Models/UserModels/StudentRegistration.model";

const students = mongoose.model("students", StudentRegModel);
const businessClient = mongoose.model("businessClients", BusinessOwnerRegModel);
const developer = mongoose.model("developers", DeveloperRegModel);

export class LogOutController {


    public logOutUser(req: Request, res: Response) {

        const username = req.body.tokenId.data.username;

        if (req.body.tokenId.data.tokenId === "student") {
            students.findOneAndUpdate({ username }, { loggedIn_Status: false }, (error: any) => {
                if (error) {
                    res.json({
                        success: false,
                        message: `Logout process for ${username} could not be completed`,
                        status: httpStatus.INTERNAL_SERVER_ERROR,
                        error
                    });
                } else {
                    res.json({
                        success: true,
                        message: `Logout process for ${username} was completed successfully`,
                        status: httpStatus.OK
                    });
                }
            });
            return;
        } else {
            if (req.body.tokenId.data.tokenId === "businessClient") {
                businessClient.findOneAndUpdate({ username }, { loggedIn_Status: false }, (error: any) => {
                    if (error) {
                        res.json({
                            success: false,
                            message: `Logout process for ${username} could not be completed`,
                            status: httpStatus.INTERNAL_SERVER_ERROR,
                            error
                        });
                    } else {
                        res.json({
                            success: true,
                            message: `Logout process for ${username} was completed successfully`,
                            status: httpStatus.OK
                        });
                    }
                });
                return;
            } else {
                if (req.body.tokenId.data.tokenId === "developer") {
                    developer.findOneAndUpdate({ username }, { loggedIn_Status: false }, (error: any) => {
                        if (error) {
                            res.json({
                                success: false,
                                message: `Logout process for ${username} could not be completed`,
                                status: httpStatus.INTERNAL_SERVER_ERROR,
                                error
                            });
                        } else {
                            res.json({
                                success: true,
                                message: `Logout process for ${username} was completed successfully`,
                                status: httpStatus.OK
                            });
                        }
                    });
                    return;
                }
            }
        }

    }






}