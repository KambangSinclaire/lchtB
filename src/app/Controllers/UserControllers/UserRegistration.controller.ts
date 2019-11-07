
import mongoose from "mongoose";

import { PasswordHandler } from "../../Validators/PasswordHandler.validate";
import { HandleRegistrationErrors } from "../../Middlewares/Custom/Error Handling/RegistrationError.middleware";
import { AuthToken } from "../../Middlewares/Custom/Request Validation/Request Authentication/AddTokenForAuth.middleware";
import { BusinessOwnerRegModel } from "../../Models/UserModels/BusinessOwnerReg.model";
import { DeveloperRegModel } from "../../Models/UserModels/DeveloperRegistration.model";
import { StudentRegModel } from "../../Models/UserModels/StudentRegistration.model";

const studentRegistrationModel = mongoose.model("Student", StudentRegModel);
const developerModel = mongoose.model("Developer", DeveloperRegModel);
const businessClientModel = mongoose.model("BusinessClient", BusinessOwnerRegModel);

export class RegistrationController {



    public registerUser(req: any, res: any, next: any) {

        console.log("reached registration controller");
        const tokenGenerator = new AuthToken();

        //Create a Business Account
        if (req.body.businessCategory) {
            const user = [{
                username: req.body.username,
                password: new PasswordHandler().encryptPassword(req.body.password),
                email: req.body.email,
                businessCategory: req.body.businessCategory,
                phone: req.body.phone
            }];
            businessClientModel.create(user, (error, user) => {
                if (error) {
                    HandleRegistrationErrors.registrationErrorReporterMiddleware(error, req, res, next);
                } else {
                    //generate token
                    tokenGenerator.addBusinessClientToken(user, req, res, next)
                }
            });
            return;
        }


        //Create a student Account
        if (req.body.academicLevel) {
            const user = [{
                username: req.body.username,
                password: new PasswordHandler().encryptPassword(req.body.password),
                email: req.body.email,
                academicLevel: req.body.academicLevel,
                phone: req.body.phone,
                loggedIn_Status: true
            }];
            studentRegistrationModel.create(user, (error, user) => {
                if (error) {
                    HandleRegistrationErrors.registrationErrorReporterMiddleware(error, req, res, next);
                } else {
                    //generate token
                    tokenGenerator.addStudentToken(user, req, res, next)
                }
            });
            return;
        }


        //Create a Developer Account
        if (req.body.developmentField) {
            const user = [{
                username: req.body.username,
                password: new PasswordHandler().encryptPassword(req.body.password),
                email: req.body.email,
                developmentField: req.body.developmentField,
                phone: req.body.phone
            }];
            developerModel.create(user, (error, user) => {
                if (error) {
                    HandleRegistrationErrors.registrationErrorReporterMiddleware(error, req, res, next);
                } else {
                    //generate token
                    tokenGenerator.addDeveloperToken(user, req, res, next)
                }
            });
            return;
        }
    }
}