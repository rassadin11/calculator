import { Router } from 'express'
import ExpController from '../controllers/Exp.controller.js'

const router = new Router()

router.post('/expression', ExpController.addExpression)
router.get('/expression/:id', ExpController.getExpression)
router.get('/expression', ExpController.getAllExpression)

export default router
