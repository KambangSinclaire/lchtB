import * as jwt from "jsonwebtoken";

import { RegKeys } from "../Keys/AuthRegKeys.key";
import { TokenMessageReporter } from "../../Error Handling/TokenMessages";
export class AuthToken {

    public addStudentToken(user: any, req: any, res: any, next: any) {
        const data: object = {
            username: req.body.username,
            academicLevel: req.body.academicLevel,
            tokenId: "student"
        }
        //sign or generate new token 
        jwt.sign({ data: data }, RegKeys.SECRET_STUDENT, { expiresIn: "5mins" }, (error, token) => {
            if (error) {
                TokenMessageReporter.tokenGenerationError(error, req, res, next);
            } else {
                //Send token to frontend
                TokenMessageReporter.tokenGenerationSuccess(user, token, req, res, next)
            }
        });
    }
    public addBusinessClientToken(user: any, req: any, res: any, next: any) {
        const data: object = {
            username: req.body.username,
            businessCategory: req.body.businessCategory,
            tokenId: "businessClient"
        }
        //sign or generate new token 
        jwt.sign({ data: data }, RegKeys.SECRET_BUSINESS, { expiresIn: "5mins" }, (error, token) => {
            if (error) {
                TokenMessageReporter.tokenGenerationError(error, req, res, next);
            } else {
                //Send token to frontend
                TokenMessageReporter.tokenGenerationSuccess(user, token, req, res, next)
            }
        });
    }
    public addDeveloperToken(user: any, req: any, res: any, next: any) {
        const data: object = {
            username: req.body.username,
            developmentField: req.body.developmentField,
            tokenId: "developer"
        }
        //sign or generate new token 
        jwt.sign({ data: data }, RegKeys.SECRET_DEVELOPER, { expiresIn: "5mins" }, (error, token) => {
            if (error) {
                TokenMessageReporter.tokenGenerationError(error, req, res, next);
            } else {
                //Send token to frontend
                TokenMessageReporter.tokenGenerationSuccess(user, token, req, res, next)
            }
        });
    }



}