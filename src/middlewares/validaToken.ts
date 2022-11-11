import express from 'express';

const validaToken = express();

validaToken.use((req, res, next)=>{
    next();
})

export default validaToken;