import express from "express";

import { DatabaseConfig } from "./Server/database.config";
import { ServerConfiguration } from "./Server/server.config";
import { RegistrationAndAuthenticationRoutes } from "./API_EndPoints/UserEndpoints/UserRegAndAuth.routes";
import { RequiredMiddleWares } from "./Middlewares/Required/RequiredMiddleWares";


class Application {

    private app: express.Application;

    private databaseUrl: string = `mongodb+srv://SinclaireKambang:heisdearjesus71996@liachatapp-m5ccb.mongodb.net/liachatDb?retryWrites=true&w=majority`;


    constructor() {
        this.app = express();
        this.startApp(this.app);
    }

    private startApp(app: express.Application): void {


        // Create instance of the middleware class 
        //and call the setMiddleware method of the class
        const middleWares = new RequiredMiddleWares(app);
        middleWares.setRequiredMiddleWares();



        // Create instance of the UserRoutes class 
        //and call the methods of the class
        const userRoutes = new RegistrationAndAuthenticationRoutes(app);
        userRoutes.homeRoute();
        userRoutes.userRegistration();
        userRoutes.userLogin();





        // Create instance of the Database configuration class 
        //and call the connectToDatabase method of the class
        const databaseConfiguration = new DatabaseConfig();
        databaseConfiguration.connectToDatabase(this.databaseUrl);



        // Create instance of the server configuration class 
        //and call the setUpServer method of the class
        const serverConfiguration = new ServerConfiguration(app);
        serverConfiguration.setUpServer();

    }
}
// creating an instance of this default Application class to run or bootstrap the entire API
export default new Application();