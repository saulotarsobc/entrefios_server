"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const validaToken = express_1.default.Router();
validaToken.use((req, res, next) => {
    next();
    /*res.json({
            body: req.body.token,
            url: req.originalUrl,
            file: req.file,
            oi: 'oioi'
        }); */
});
exports.default = validaToken;
