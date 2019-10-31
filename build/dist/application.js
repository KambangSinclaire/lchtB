"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middlewares_1 = require("./Server/middlewares");
var server_config_1 = require("./Server/server.config");
var database_config_1 = require("./Server/database.config");
var Application = /** @class */ (function () {
    function Application() {
        this.databaseUrl = "mongodb://localhost:27017/liachat";
        this.app = express_1.default();
        this.startApp(this.app);
    }
    Application.prototype.startApp = function (app) {
        // Create instance of the middleware class 
        //and call the setMiddleware method of the class
        var middleWares = new middlewares_1.MiddleWares(app);
        middleWares.setMiddleWares();
        // Create instance of the server configuration class 
        //and call the setUpServer method of the class
        var serverConfiguration = new server_config_1.ServerConfiguration(app);
        serverConfiguration.setUpServer();
        // Create instance of the Database configuration class 
        //and call the connectToDatabase method of the class
        var databaseConfiguration = new database_config_1.DatabaseConfig();
        databaseConfiguration.connectToDatabase(this.databaseUrl);
    };
    return Application;
}());
// creating an instance of this default class to run or bootstrap the entire API
exports.default = new Application();
//# sourceMappingURL=application.js.map