import express, {Express, Request, Response} from 'express';
import * as dotenv from 'dotenv'
import bodyParser = require('body-parser');

//Initialize dotenv
dotenv.config()

//Express Apps
import claimsRouter from './claims/api';
import REGUARD_DB from './database/database';
import customerRouters from './customers/api';
import purchasesRouter from './purchases/api';

Promise.all([
    REGUARD_DB.sync({alter: true}),
])
.then(() => {
    const app: Express = express();
    app.use(express.static(__dirname))
    app.use(bodyParser.json());

    app.use((req, res, next) => {
        console.log(`${req.method} ${req.path}`);
        next();
    })

    app.use("/claims", claimsRouter)
    app.use("/customers", customerRouters)
    app.use("/purchases", purchasesRouter)

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
})
.catch((error) => {
    console.log(error);
})