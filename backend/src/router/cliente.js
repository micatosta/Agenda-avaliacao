import express from 'express'
import ControllerCliente from '../controller/cliente.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

router.post('/login', ControllerCliente.Login)

router.get('/cliente/context', authMiddleware(), ControllerCliente.FindOne)
router.post('/cliente/', ControllerCliente.Create)
router.put('/cliente', authMiddleware(), ControllerCliente.Update)
router.delete('/cliente', authMiddleware(), ControllerCliente.Delete)

router.get('/cliente', authMiddleware([0]), ControllerCliente.FindAll)
router.get('/cliente/:id', authMiddleware([0]), ControllerCliente.FindOne)
router.post('/cliente/admin',authMiddleware([0]), ControllerCliente.Create)
router.put('/cliente/:id', authMiddleware([0]), ControllerCliente.Update)
router.delete('/cliente/:id', authMiddleware([0]), ControllerCliente.Delete)

export default router