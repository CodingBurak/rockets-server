"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routes = new routes_1.Routes();
        this.localMongoUrl = 'mongodb://127.0.0.1:27017/firework';
        this.remoteMongoUrl = "mongodb+srv://burak:burak@firework.fxgkf.mongodb.net/firework?retryWrites=true&w=majority";
        this.app = express();
        this.config();
        this.routes.routes(this.app);
        this.isRemote = process.argv[2] == "remote";
        this.mongoSetup();
        console.log(process.argv[2]);
    }
    config() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader("Access-Control-Allow-Origin", "*");
            next();
        });
    }
    mongoSetup() {
        let url = this.localMongoUrl;
        if (this.isRemote) {
            url = this.remoteMongoUrl;
        }
        mongoose.connect(url, { useNewUrlParser: true });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map