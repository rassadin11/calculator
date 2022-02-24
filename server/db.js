import sqlite3 from 'sqlite3'

export const db = new sqlite3.Database(
  './calculate.db',
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message)

    console.log('connection successful')
  },
)
