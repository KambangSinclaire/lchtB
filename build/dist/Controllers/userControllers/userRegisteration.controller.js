"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var userRegistration_model_1 = require("Models/userModels/userRegistration.model");
var registrationModel = mongoose_1.default.model("loginModel", userRegistration_model_1.userRegistrationModel);
var RegistrationController = /** @class */ (function () {
    function RegistrationController() {
        this.statusCode = 404;
        this.successStatusCode = 200;
    }
    RegistrationController.prototype.registerUser = function (req, res) {
        var _this = this;
        var user = [{
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            }];
        registrationModel.create(user, function (error, user) {
            if (error) {
                res.status(_this.statusCode).json({ "success": false, "message": error.message });
            }
            else {
                res.status(_this.successStatusCode).json(user);
            }
        });
    };
    return RegistrationController;
}());
exports.RegistrationController = RegistrationController;
//# sourceMappingURL=userRegistration.controller.js.map