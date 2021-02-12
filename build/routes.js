"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const FireworkHandler_1 = require("./handler/FireworkHandler");
const express_1 = require("express");
class Routes {
    constructor() {
        this.fireworkHandler = new FireworkHandler_1.FireworkHandler();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        const api = express_1.Router();
        app.use('/api', api);
        // Rockets 
        api.route('/rockets')
            .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, this.fireworkHandler.getAll);
        // POST endpoint
        api.route('/rockets').post((req, res, next) => {
            console.log(`Request from: ${JSON.stringify(req.body)}`);
            next();
        }, this.fireworkHandler.create);
        // Contact detail
        api.route('/rocket/:rocketId')
            // get specific contact
            .get(this.fireworkHandler.getByID)
            .put(this.fireworkHandler.update)
            .delete(this.fireworkHandler.delete);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map