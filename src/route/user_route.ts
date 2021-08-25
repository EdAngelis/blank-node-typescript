import express from 'express'
import Controller from '../controller/user_controller'

const router = express.Router()

const userController = new Controller()

router.post('/create', userController.create)
router.put('/update/:id', userController.update)
router.delete('/delete/:id', userController.delete)
router.get('/', userController.takeAll)

export default router
