import React from 'react'
import { getOperations } from './api/Api'
import './App.css'
import Calculator from './components/Calculator'
import { v4 } from 'uuid'
import { animateScroll } from 'react-scroll'

interface IExpression {
  id: number
  expression: string
  result: string
}

function App(): JSX.Element {
  const [data, setData] = React.useState<IExpression[]>([])
  const [result, setResult] = React.useState<string>('')
  const scroll = animateScroll

  const handleClick = async () => {
    const data = await getOperations()
    if (!data.length) setResult('Database is empty')

    setData(data)

    scroll.scrollToBottom()
  }

  return (
    <div className="App">
      <Calculator />
      <div
        onClick={handleClick}
        style={{
          display: 'block',
          background: '#3A4E89',
          fontFamily: 'Museo',
          padding: '10px 0',
          cursor: 'pointer',
        }}
      >
        <button
          style={{
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '16px',
            margin: '0 auto',
            display: 'block',
            cursor: 'pointer',
          }}
        >
          Get all operations
        </button>
      </div>

      {data.length ? (
        <table>
          <thead>
            <tr>
              <td style={{ width: '50px', textAlign: 'center' }}>ID</td>
              <td style={{ width: '50px', textAlign: 'center' }}>Expression</td>
              <td style={{ width: '50px', textAlign: 'center' }}>Result</td>
            </tr>
          </thead>
          <tbody>
            {data.map((d: IExpression) => (
              <tr key={v4()}>
                <th>{d.id}</th>
                <th>{d.expression}</th>
                <th>{d.result}</th>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span>{result}</span>
      )}
    </div>
  )
}

export default App
