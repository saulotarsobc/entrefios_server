import { Router, Request, Response } from 'express';
import multer from 'multer';

const upload = multer({
    dest: 'uploads/'
})

/* server */
const routeGalery = Router();

routeGalery.post('/save', upload.single('product'), (req: Request, res: Response) => {
    res.json({
        body: req.body.token,
        url: req.originalUrl,
        file: req.file
    })
});

export default routeGalery;