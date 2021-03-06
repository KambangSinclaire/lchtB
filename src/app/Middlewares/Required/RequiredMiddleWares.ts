import cors from "cors";

import express from "express";

import bodyParser from "body-parser";

export class RequiredMiddleWares {


    constructor(private app: express.Application) {
    }

    public setRequiredMiddleWares(): void {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static(__dirname + '/../../../../build/public/'));
        this.app.use('/styles', express.static('/../../../../build/public/css/coming-soon.min.css'))
    }
}