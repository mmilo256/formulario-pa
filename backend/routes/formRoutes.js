import e from 'express'
import { getAllFormData, postFormData } from '../controllers/formController.js'

const router = e.Router()

router.get("/", getAllFormData)
router.post("/", postFormData)

export default router