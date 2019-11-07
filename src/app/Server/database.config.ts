import mongoose from "mongoose";

export class DatabaseConfig {

    public connectToDatabase(databaseUrl: string): void {
        mongoose.connect(databaseUrl, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }, (error) => {
            if (error)
                console.log("Connection failed");
            else
                console.log("Connection Successfull");
        });
    }

}