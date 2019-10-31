"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var user_routes_1 = require("API_EndPoints/userEndpoints/user.routes");
var MiddleWares = /** @class */ (function () {
    function MiddleWares(app) {
        this.userRoutes = new user_routes_1.UserRoutes();
        this.app = app;
    }
    MiddleWares.prototype.setMiddleWares = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use("liachat/api", this.userRoutes.loginRoute);
        this.app.use("liachat/api", this.userRoutes.registrationRoute);
    };
    return MiddleWares;
}());
exports.MiddleWares = MiddleWares;
//# sourceMappingURL=middlewares.js.map