import e from 'express'
import { checkItem, getAllFormData, getItemById, postFormData } from '../controllers/formController.js'

const router = e.Router()

router.get("/", getAllFormData)
router.post("/", postFormData)
router.get("/:id", getItemById)
router.patch("/:id", checkItem)

export default router