import express from 'express'
import dotenv from 'dotenv'
import router from './routes/Exp.routes.js'
import cors from 'cors'
import mongoose from 'mongoose'

dotenv.config()

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

app.listen(PORT, async () => {
  await mongoose.connect(
    `mongodb+srv://Artyom:rmssdni005A@cluster0.eq6hw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  )
  console.log('Server has been activated ' + PORT)
})
