import * as Mongoose from "mongoose";

import { ValidFieldLengths } from "../../Constants/UserInputLengths";

export const DeveloperRegModel = new Mongoose.Schema({

    username: {
        type: String,
        required: true,
        minlength: ValidFieldLengths.MIN_USERNAME_LENGTH,
        maxlength: ValidFieldLengths.MAX_USERNAME_LENGTH,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: ValidFieldLengths.MIN_PASSWORD_LENGTH,
        maxlength: ValidFieldLengths.MAX_PASSWORD_LENGTH
    },
    email: {
        type: String,
        minlength: ValidFieldLengths.MIN_EMAIL_LENGTH,
        maxlength: ValidFieldLengths.MAX_EMAIL_LENGTH,
        unique: true
    },
    phone: {
        type: Number,
        minlength: ValidFieldLengths.MIN_PHONE_LENGTH,
        maxlength: ValidFieldLengths.MAX_PHONE_LENGTH
    },
    developmentField: {
        type: String,
        minlength: ValidFieldLengths.MIN_ACADEMIC_CATEGORY_LENGTH,
        maxlength: ValidFieldLengths.MAX_ACADEMIC_CATEGORY_LENGTH,
        required: true
    },

    profilePicture: {
        type: String,
    },
    loggedIn_Status: {
        type: Boolean,
        default: false
    }
});