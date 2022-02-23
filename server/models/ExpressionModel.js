import mongoose from 'mongoose'

const ExpressionModel = new mongoose.Schema({
  expression: { type: String, length: { max: 255 }, required: true },
  result: { type: String, length: { max: 255 }, required: true },
})

export default mongoose.model('Expression', ExpressionModel)
