require("dotenv").config();
import express from 'express';

const validaToken = express();

validaToken.use((req, res, next) => {
    if (req.body.token == process.env.TOKEN) {
        next();
    } else {
        res.status(401).json({
            msg: 'invalid token'
        });
    }
});

export default validaToken;