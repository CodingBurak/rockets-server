import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { Rocket } from '../models/RocketModel';

  export class FireworkHandler {

    public create(req: Request, res: Response) {
      let newrocket = new Rocket(req.body);
      console.log(req.body)
      newrocket.save((err, rocket) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json(rocket);
        }
      });
    }

    public getAll(req: Request, res: Response) {
      Rocket.find({}).select('-__v').exec((err, rockets) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json(rockets);
        }
      });
    }

    public getByID(req: Request, res: Response) {
      Rocket.findById(req.params.rocketId).select('-__v').exec((err, rocket) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json(rocket);
        }
      });
    }

    public update(req: Request, res: Response) {
      Rocket.findOneAndUpdate({ _id: req.params.rocketId }, req.body, { new: true }, (err, rocket) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json(rocket);
        }
      });
    }

    public delete(req: Request, res: Response) {
      Rocket.remove({ _id: req.params.rocketId }, (err) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json({ message: 'Successfully deleted contact!' });
        }
      });
    }
    
  }