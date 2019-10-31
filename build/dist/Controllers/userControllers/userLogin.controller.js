"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var userLogin_model_1 = require("Models/userModels/userLogin.model");
var loginModel = mongoose_1.default.model("loginModel", userLogin_model_1.userLoginModel);
var LoginController = /** @class */ (function () {
    function LoginController() {
        this.statusCode = 404;
        this.successStatusCode = 200;
    }
    LoginController.prototype.authenticateUser = function (req, res) {
        var _this = this;
        var username = req.body.username;
        var password = req.body.password;
        loginModel.findOne(username, function (error, user) {
            if (error) {
                res.status(_this.statusCode).json({ "success": false, "message": error.message });
            }
            else {
                res.status(_this.successStatusCode).json(user);
            }
        });
    };
    return LoginController;
}());
exports.LoginController = LoginController;
//# sourceMappingURL=userLogin.controller.js.map