require("dotenv").config();
import { Router, NextFunction, Request, Response } from 'express';

const validaToken = Router();

validaToken.use((req: Request, res: Response, next: NextFunction) => {
    next();
    res.json({
        body: req.body.token,
        url: req.originalUrl,
        file: req.file,
        oi: 'oioi'
    });
});

export default validaToken;