import * as jwt from "jsonwebtoken";

import { RegKeys } from "../Keys/AuthRegKeys.key";
import { TokenMessageReporter } from "../../Error Handling/TokenMessages";
export class AuthToken {

    public addUserToken(userCategory: string, user: any, req: any, res: any, next: any) {
        const data: object = {
            username: req.body.username,
            userCategory: userCategory
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

}