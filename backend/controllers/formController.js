import FormData from "../Models/formModel.js"

export const getAllFormData = async (req, res) => {
    const data = await FormData.findAll()
    res.status(200).json({ data })
}

export const postFormData = async (req, res) => {
    const newData = req.body
    const data = await FormData.create(newData)
    res.status(200).json({ data })
}