/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from 'react'
import { Grid } from '@mui/material'
import expo from '../computes/Devision'
import { Signs } from '../computes/enums'

interface Props {
  symbol: string
  result: string
  number: boolean
  // functions and styles
  button: any
  setTemporaryResult: any
  sendNumber: any
  computeOperation: any
  clearNumbers: any
}

export default function Action({
  button,
  symbol,
  number,
  setTemporaryResult,
  result,
  sendNumber,
  computeOperation,
  clearNumbers,
}: Props): JSX.Element {
  const handleClick = () => {
    if (number) {
      if (result.toString().split('').length > 9) {
        return
      } else if (result === '0') {
        setTemporaryResult(symbol)
      } else {
        setTemporaryResult(result + symbol)
      }
    }
  }

  const chooseFunction = () => {
    if (
      Signs[0] === symbol ||
      Signs[1] === symbol ||
      Signs[2] === symbol ||
      Signs[3] === symbol
    ) {
      return () => sendNumber(symbol)
    } else if (symbol === Signs[4]) {
      return () => setTemporaryResult(String(Number(result) * -1))
    } else if (symbol === Signs[5]) {
      return () => computeOperation()
    } else if (symbol === Signs[6]) {
      return () => clearNumbers()
    } else if (symbol === Signs[7]) {
      let numb = Number(result) / 100

      if (numb.toString().split('').length > 10) {
        numb = Number(expo(String(numb), 4))
      }

      return () => setTemporaryResult(numb)
    } else if (symbol === Signs[8]) {
      if (result.toString().split('').includes('.')) {
        return
      }

      return () => setTemporaryResult(`${result}.`)
    } else {
      return handleClick
    }
  }

  return (
    <Grid item className={button} onClick={chooseFunction()}>
      <div>{symbol}</div>
    </Grid>
  )
}
