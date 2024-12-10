import express from 'express'
import { AddHistoryController, GetHistoryController, deleteHistoryController} from '../Controllers/AddHistoryController.js'

const router = express.Router()

router.post('/add-history',AddHistoryController)

router.post('/get-history',GetHistoryController)

router.delete('/delete-history',deleteHistoryController)

export default router