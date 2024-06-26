"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const subscribeSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true }
});
const SubscribeModel = mongoose_1.default.model('Subscriber', subscribeSchema);
exports.default = SubscribeModel;
