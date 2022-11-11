"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
/* imports middlewares */
const validaToken_1 = __importDefault(require("./middlewares/validaToken"));
/* server */
const server = (0, express_1.default)();
/* middlewares */
server.use(body_parser_1.default.json());
server.use(validaToken_1.default);
/* imports routes */
const routeGalery_1 = __importDefault(require("./routes/routeGalery"));
/* routes */
server.use('/galery', routeGalery_1.default);
/* init server */
const { PORT } = process.env;
server.listen(PORT, () => {
    console.log(`Server running...${PORT}`);
});
