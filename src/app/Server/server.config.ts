import express from "express";


export class ServerConfiguration {


    private port = process.env.PORT || 9000;

    constructor(private app: express.Application) {

    }

    public setUpServer(): any {
        const server = this.app.listen(this.port, () => {
            console.log(`Server started on port ${this.port}`);
        });
        return server;
    }


}