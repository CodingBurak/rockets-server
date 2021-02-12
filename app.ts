import { Routes } from './routes';
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

  class App {

    public app: express.Application;
    public routes: Routes = new Routes();
    public mongoUrl: string = 'mongodb://127.0.0.1:27017/firework';

    constructor() {
      this.app = express();
      this.config();
      this.routes.routes(this.app);
      this.mongoSetup();
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
      //mongoose.Promise = global.Promise;
      mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }

  }

export default new App().app;