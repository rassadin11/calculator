import React, { useState } from 'react'
import Card from '@mui/material/Card'
import { Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/styles'
import Result from './Result'
import Actions from './actions/Actions'
import operate from './computes/computeResult'

const theme = createTheme({
  typography: {
    fontFamily: ['Museo', 'Digital Numbers', 'Montserrat'].join(','),
  },
})

const styles = {
  card: { maxWidth: 410, padding: '24px', background: '#F1F3F6' },
  header: {
    fontFamily: 'Museo',
    fontSize: 28,
    letterSpacing: '0.85px',
    fontWeight: '600',
    color: '#373A37',
    lineHeight: '33.8px',
    fontStyle: 'normal',
  },
}

const Calculator = (): JSX.Element => {
  const [numbers, setNumbers] = useState<string[]>([])
  const [signs, setSigns] = useState<string[]>([])
  const [temporaryResult, setTemporaryResult] = useState<string>('0')

  // validate operators
  React.useEffect(() => {
    if (signs.length > numbers.length) {
      signs.splice(signs.length - 2, 1)
      setSigns([...signs])
    }
  }, [numbers, signs])

  // start calculation
  const computeOperation = () => {
    setTemporaryResult(operate(numbers, signs, temporaryResult, setNumbers))
    setSigns([])
  }

  // delete all data
  const clearNumbers = () => {
    setNumbers([])
    setSigns([])
    setTemporaryResult('0')
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Card sx={{ ...styles.card }}>
          <Typography variant="h1" component="div" sx={{ ...styles.header }}>
            Calculator
          </Typography>
          <Result result={temporaryResult} />
          <Actions
            setNumbers={setNumbers}
            numbers={numbers}
            signs={signs}
            setSigns={setSigns}
            temporaryResult={temporaryResult}
            setTemporaryResult={setTemporaryResult}
            computeOperation={computeOperation}
            clearNumbers={clearNumbers}
          />
        </Card>
      </div>
    </ThemeProvider>
  )
}

export default Calculator
