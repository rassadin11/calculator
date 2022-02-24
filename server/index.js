import express from 'express'
import dotenv from 'dotenv'
import router from './routes/Exp.routes.js'
import cors from 'cors'
import { db } from './db.js'

dotenv.config()

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

app.listen(PORT, async () => {
  db, console.log('Server has been activated ' + PORT)
})
