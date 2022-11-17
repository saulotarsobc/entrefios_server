"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({
    dest: 'uploads/'
});
/* server */
const routeGalery = express_1.default.Router();
routeGalery.post('/save', upload.single('product'), (req, res) => {
    res.json({
        body: req.body.token,
        url: req.originalUrl,
        file: req.file
    });
});
exports.default = routeGalery;
