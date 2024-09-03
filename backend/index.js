/* eslint-disable no-undef */
import e from 'express'
import cors from 'cors'
import formRouter from './routes/formRoutes.js'
import 'dotenv/config'

const app = e()

app.use(cors())

app.use(e.json())

app.use("/api", formRouter)

app.get("/", (req, res) => {
    res.send("Hola mundo")
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening...")
})