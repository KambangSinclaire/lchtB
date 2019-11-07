import { ValidFieldLengths } from "./UserInputLengths";

export const RegistrationErrors = {


    invalidUsernameLength: function (username: string): string {
        return `The username length is invalid. Expected at least ${ValidFieldLengths.MIN_USERNAME_LENGTH} Characters or at most ${ValidFieldLengths.MAX_USERNAME_LENGTH} Characters but instead got ${username.length}`;
    },
    invalidUsernameType: function (username: string): string {
        return `The username type is invalid. Expected a String but instead got ${typeof username}`;
    },
    nullUsername: function (username: string): string {
        return `The username field cannot be Null.Expected a String but instead got ${typeof username}`;
    },
    invalidUsernameFormat: function (username: string): string {
        return `The username value is not well formated`;
    },


    invalidPasswordLength: function (password: string): string {
        return `The password length is invalid. Expected at least ${ValidFieldLengths.MIN_PASSWORD_LENGTH} Characters or at most ${ValidFieldLengths.MAX_PASSWORD_LENGTH} Characters but instead got ${password.length}`;
    },
    invalidPasswordType: function (password: string): string {
        return `The password type is invalid. Expected a String but instead got ${typeof password}`;
    },
    nullPassword: function (password: string): string {
        return `The password field cannot be Null.Expected a String but instead got ${typeof password}`;
    },
    invalidPasswordFormat: function (password: string): string {
        return `The Password value is not well formated`;
    },


    invalidEmailLength: function (email: string): string {
        return `The email length is invalid. Expected at least ${ValidFieldLengths.MIN_EMAIL_LENGTH} Characters or at most ${ValidFieldLengths.MAX_EMAIL_LENGTH} Characters but instead got ${email.length}`;
    },
    invalidEmailType: function (email: string): string {
        return `The email type is invalid. Expected a String but instead got ${typeof email}`;
    },
    nullEmail: function (email: string): string {
        return `The email field cannot be Null.Expected a String but instead got ${typeof email}`;
    },
    invalidEmailFormat: function (email: string): string {
        return `The Email value is not well formated`;
    },


    invalidPhoneLength: function (phone: string): string {
        return `The phone number length is invalid. Expected at least ${ValidFieldLengths.MIN_PHONE_LENGTH} Numbers or at most ${ValidFieldLengths.MAX_PHONE_LENGTH} Numbers but instead got ${phone.length}`;
    },
    invalidPhoneType: function (phone: string): string {
        return `The phone number type is invalid. Expected a Number but instead got ${typeof phone}`;
    },
    nullPhone: function (phone: string): string {
        return `The phone number field cannot be Null.Expected a String but instead got ${typeof phone}`;
    },


    invalidAcademicLevelLength: function (academicLevel: string): string {
        return `The Academic Level length is invalid. Expected at least ${ValidFieldLengths.MIN_ACADEMIC_CATEGORY_LENGTH} Characters or at most ${ValidFieldLengths.MAX_ACADEMIC_CATEGORY_LENGTH} Characters but instead got ${academicLevel.length}`;
    },
    invalidAcademicLevelType: function (academicLevel: string): string {
        return `The Academic Level type is invalid. Expected a String but instead got ${typeof academicLevel}`;
    },
    nullAcademicLevel: function (academicLevel: string): string {
        return `The Academic Level field cannot be Null.Expected a String but instead got ${typeof academicLevel}`;
    },



    invalidBusinessCategoryLength: function (businessCategory: string): string {
        return `The Business Category length is invalid. Expected at least ${ValidFieldLengths.MIN_BUSINESS_CATEGORY_LENGTH} Characters or at most ${ValidFieldLengths.MAX_BUSINESS_CATEGORY_LENGTH} Characters but instead got ${businessCategory.length}`;
    },
    invalidBusinessCategoryType: function (businessCategory: string): string {
        return `The Business Category type is invalid. Expected a String but instead got ${typeof businessCategory}`;
    },
    nullBusinessCategory: function (businessCategory: string): string {
        return `The Business Category field cannot be Null.Expected a String but instead got ${typeof businessCategory}`;
    },


    invalidDevelopmentFieldLength: function (developmentField: string): string {
        return `The developmentField length is invalid. Expected at least ${ValidFieldLengths.MIN_DEVELOPMENT_FIELD_LENGTH} Characters or at most ${ValidFieldLengths.MAX_DEVELOPMENT_FIELD_LENGTH} Characters but instead got ${developmentField.length}`;
    },
    invalidDevelopmentFieldType: function (developmentField: string): string {
        return `The developmentField type is invalid. Expected a String but instead got ${typeof developmentField}`;
    },
    nullDevelopmentField: function (developmentField: string): string {
        return `The developmentField field cannot be Null.Expected a String but instead got ${typeof developmentField}`;
    },

}