"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rocket = void 0;
const mongoose = require("mongoose");
const RocketSchema = new mongoose.Schema({
    name: {
        type: String
    },
    color: {
        type: Number
    },
    secondColor: {
        type: Number
    },
    speed: {
        type: Number
    },
    size: {
        type: Number
    }
});
exports.Rocket = mongoose.model('Rocket', RocketSchema);
//# sourceMappingURL=RocketModel.js.map