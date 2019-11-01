import * as bcrypt from "bcryptjs";
export class PasswordHandler {

    public encryptPassword(password: string): string {
        try {
            let hashedPassword = bcrypt.hashSync(password);
            return hashedPassword;
        } catch (error) {
            console.log(error);
        }
        return password;
    }


    public decryptAndComparePasswords(password: string, storedPassword: string): boolean {
        if (bcrypt.compareSync(password, storedPassword)) {
            return true;
        } else {
            return false;
        }
    }
}