import * as express from "express";
import * as cors from 'cors'
import { api, corsUrl } from '../config/index'
import router from "../api/routes/index";
import { NotFoundError } from "../helpers/apiResponse";

const ServerApplication = (): express.Application => {
    const app = express()

    app.use(express.json({ limit: '2mb' }))
    app.use(express.urlencoded({ limit: '2mb', extended: true }))
    app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }))

    app.use(api.prefix, router)

    app.use((_req: express.Request, res: express.Response) => NotFoundError(res))

    return app
}

export default ServerApplication