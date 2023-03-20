import { Router } from 'express'

import items from './items/index'

const router = Router({ caseSensitive: true })

router.use('/items', items)

export default router