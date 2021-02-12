"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireworkHandler = void 0;
const RocketModel_1 = require("../models/RocketModel");
class FireworkHandler {
    create(req, res) {
        let newrocket = new RocketModel_1.Rocket(req.body);
        console.log(req.body);
        newrocket.save((err, rocket) => {
            if (err) {
                res.status(400).send(err);
            }
            else {
                res.json(rocket);
            }
        });
    }
    getAll(req, res) {
        RocketModel_1.Rocket.find({}).select('-__v').exec((err, rockets) => {
            if (err) {
                res.status(400).send(err);
            }
            else {
                res.json(rockets);
            }
        });
    }
    getByID(req, res) {
        RocketModel_1.Rocket.findById(req.params.rocketId).select('-__v').exec((err, rocket) => {
            if (err) {
                res.status(400).send(err);
            }
            else {
                res.json(rocket);
            }
        });
    }
    update(req, res) {
        RocketModel_1.Rocket.findOneAndUpdate({ _id: req.params.rocketId }, req.body, { new: true }, (err, rocket) => {
            if (err) {
                res.status(400).send(err);
            }
            else {
                res.json(rocket);
            }
        });
    }
    delete(req, res) {
        RocketModel_1.Rocket.remove({ _id: req.params.rocketId }, (err) => {
            if (err) {
                res.status(400).send(err);
            }
            else {
                res.json({ message: 'Successfully deleted contact!' });
            }
        });
    }
}
exports.FireworkHandler = FireworkHandler;
//# sourceMappingURL=FireworkHandler.js.map