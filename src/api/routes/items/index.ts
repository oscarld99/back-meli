import { Request, Response, Router, RequestHandler } from 'express'
import { findItemByProductId, findItemByQuery } from '../../../services/items/index'
import { BadRequestResponse, SuccessOkResponse } from '../../../helpers/apiResponse'

const router = Router()

const getItemsByQuery: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { query } = req.params
        const result = await findItemByQuery({
            q: query,
            limit: 4
        })
        SuccessOkResponse({
            data: result,
            message: 'Search items successfully',
            res
        })
    } catch (error) {
        BadRequestResponse({
            res,
            message: 'Error fetching items'
        })
        console.log(error)
    }
}

const getItemsById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await findItemByProductId(id)
        SuccessOkResponse({
            data: result,
            message: 'Search items successfully',
            res
        })
    } catch (error) {
        BadRequestResponse({
            res,
            message: 'Error fetching detail'
        })
        console.log(error)
    }
}

router.get('/:query', getItemsByQuery)
router.get('/detail/:id', getItemsById)

export default router