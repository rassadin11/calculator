import ExpressionModel from '../models/ExpressionModel.js'

class ExpController {
  async addExpression(req, res) {
    const { expression, result } = req.body
    if (!expression || !result)
      return res.json({ message: 'Field is empty', error: -1 })

    const newOperation = new ExpressionModel({ expression, result })
    newOperation.save()

    res.json(newOperation)
  }

  async getAllExpression(req, res) {
    const operations = await ExpressionModel.find()
    res.json(operations)
  }

  async getExpression(req, res) {
    const { id } = req.params
    const operation = await ExpressionModel.findOne({ _id: id })

    res.json(operation)
  }
}

export default new ExpController()
