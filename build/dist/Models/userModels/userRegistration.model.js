"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
exports.userRegistrationModel = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        default: "#liachat$User",
        maxlength: 50,
        minlength: 8
    },
    email: {
        type: String,
        required: true,
        default: "liauser@examplemail.com",
        maxlength: 100,
        minlength: 10
    },
    firstName: {
        type: String,
        required: true,
        default: "liachat",
        maxlength: 50,
        minlength: 2
    },
    lastName: {
        type: String,
        required: true,
        default: "User",
        maxlength: 50,
        minlength: 2
    }
});
//# sourceMappingURL=userRegistration.model.js.map