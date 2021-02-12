import { FireworkHandler } from './handler/FireworkHandler';

import {Router, Request, Response, NextFunction, Application} from "express";
  export class Routes {

    public fireworkHandler: FireworkHandler = new FireworkHandler();
    
    public routes(app: Application): void {
        
      app.route('/')
        .get((req: Request, res: Response) => {
          res.status(200).send({
            message: 'GET request successfulll!!!!'
          })
        })

      const api = Router();
      app.use('/api', api);

      // Rockets 
      api.route('/rockets')
        .get((req: Request, res: Response, next: NextFunction) => {
          console.log(`Request from: ${req.originalUrl}`);
          console.log(`Request type: ${req.method}`);
          next();                      
        }, this.fireworkHandler.getAll)

        // POST endpoint
        api.route('/rockets').post((req: Request, res: Response, next: NextFunction) => {
          console.log(`Request from: ${JSON.stringify(req.body)}`);
         
          next();
        },this.fireworkHandler.create);

      // Contact detail
      api.route('/rocket/:rocketId')
        // get specific contact
        .get(this.fireworkHandler.getByID)
        .put(this.fireworkHandler.update)
        .delete(this.fireworkHandler.delete)

    }
}