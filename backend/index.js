import e from 'express'
import cors from 'cors'
import formRouter from './routes/formRoutes.js'

const app = e()

app.use(cors())

app.use(e.json())

app.use("/api", formRouter)

app.get("/", (req, res) => {
    res.send("Hola mundo")
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})