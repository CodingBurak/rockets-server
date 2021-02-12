import { Routes } from './routes';
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

  class App {

    public app: express.Application;
    public routes: Routes = new Routes();
    public localMongoUrl: string = 'mongodb://127.0.0.1:27017/firework';
    public remoteMongoUrl: string = ""
    public isRemote: boolean;


    constructor() {
      this.app = express();
      this.config();
      this.routes.routes(this.app);
      this.mongoSetup();
      console.log(process.argv[2])
      this.isRemote = process.argv[2] == "remote";
    }

    private config(): void {
      this.app.use(bodyParser.urlencoded({ extended: true }));
      this.app.use(bodyParser.json());
      
      
      this.app.use(function (req, res, next) {
       res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader("Access-Control-Allow-Origin", "*");
        next();
    });
    }

    private mongoSetup(): void {
      let url: string = this.localMongoUrl;
      if (this.isRemote) {
        url = this.remoteMongoUrl
      }
      
      mongoose.connect(url, { useNewUrlParser: true });
    }

  }

export default new App().app;