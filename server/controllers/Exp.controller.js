import { db } from '../db.js'

class ExpController {
  async addExpression(req, res) {
    const { expression, result } = req.body
    if (!expression || !result)
      return res.json({ message: 'Field is empty', error: -1 })

    db.run(`INSERT INTO calculate(expression, result) VALUES(?, ?)`, [
      expression,
      result,
    ])

    res.json({ message: 'Success' })
  }

  async getAllExpression(req, res) {
    db.all(`SELECT * FROM calculate`, [], (err, rows) => {
      if (err) return res.json({ message: err.message, error: -1 })

      return res.json(rows)
    })
  }
}

export default new ExpController()
