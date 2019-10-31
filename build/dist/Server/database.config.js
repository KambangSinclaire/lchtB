"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var DatabaseConfig = /** @class */ (function () {
    function DatabaseConfig() {
    }
    DatabaseConfig.prototype.connectToDatabase = function (databaseUrl) {
        mongoose_1.default.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (error) {
            if (error)
                console.log("Connection failed");
            else
                console.log("Connection Successfull");
        });
    };
    return DatabaseConfig;
}());
exports.DatabaseConfig = DatabaseConfig;
//# sourceMappingURL=database.config.js.map