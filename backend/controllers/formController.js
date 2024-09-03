import FormData from "../models/formModel.js"

export const getAllFormData = async (req, res) => {
    const data = await FormData.findAll()
    res.status(200).json({ data })
}

export const postFormData = async (req, res) => {
    const newData = req.body
    const data = await FormData.create(newData)
    res.status(200).json({ data })
}

export const getItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await FormData.findOne({ where: { id } });

        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
};


export const checkItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { marcado } = req.body;
        await FormData.update({ marcado }, { where: { id } })

        res.status(200).json({ msg: "Correcto" })

    } catch (error) {
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
};