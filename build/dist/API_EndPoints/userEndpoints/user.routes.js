"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userLogin_controller_1 = require("Controllers/userControllers/userLogin.controller");
var userRegistration_controller_1 = require("Controllers/userControllers/userRegistration.controller");
var Router = express_1.default.Router();
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.loginController = new userLogin_controller_1.LoginController();
        this.registrationController = new userRegistration_controller_1.RegistrationController();
        this.loginRoute();
        this.registrationRoute();
    }
    UserRoutes.prototype.loginRoute = function () {
        Router.get("/user/login", this.loginController.authenticateUser);
    };
    UserRoutes.prototype.registrationRoute = function () {
        Router.post("/user/register", this.registrationController.registerUser);
    };
    return UserRoutes;
}());
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=user.routes.js.map