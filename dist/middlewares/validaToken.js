"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const validaToken = (0, express_1.default)();
validaToken.use((req, res, next) => {
    if (req.body.token == process.env.TOKEN) {
        next();
    }
    else {
        res.status(401).json({
            msg: 'invalid token'
        });
    }
});
exports.default = validaToken;
