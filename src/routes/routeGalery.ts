import express from 'express';

/* server */
const routeGalery = express();

routeGalery.post('/save', (req, res) => {
    res.json({
        url: req.originalUrl
    })
});

export default routeGalery;