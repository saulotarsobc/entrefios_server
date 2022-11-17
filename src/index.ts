require("dotenv").config();
import express from 'express';
import bodyParser from 'body-parser';

/* imports middlewares */
import validaToken from './middlewares/validaToken';

/* server */
const server = express();

/* middlewares */
server.use(bodyParser.urlencoded({ extended: false }));
server.use(validaToken);

/* imports routes */
import routeGalery from './routes/routeGalery';

/* routes */
server.use('/galery', routeGalery)

/* init server */
const { PORT } = process.env;
server.listen(PORT, () => {
    console.log(`Server running...${PORT}`);
})

