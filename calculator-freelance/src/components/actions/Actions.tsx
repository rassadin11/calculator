/* eslint-disable  @typescript-eslint/no-explicit-any */
import { Grid } from '@mui/material'
import React from 'react'
import Action from './Action'
import { v4 } from 'uuid'
import { ButtonOrder } from './ButtonOrder'
import { makeStyles } from '@mui/styles'

interface Props {
  numbers: string[]
  signs: string[]
  temporaryResult: string
  // useState functions and compute functions
  computeOperation: any
  clearNumbers: any
  setNumbers: any
  setSigns: any
  setTemporaryResult: any
}

const useStyles = makeStyles({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: '79.46px',
    background: '#F1F3F6',
    boxShadow: '-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(55, 84, 170, 0.1)',
    borderRadius: '20px',
    margin: '0 7.5px 15px',
    marginTop: '10px',
    flex: '0 0 20%',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '29px',
    color: '#3A4E89',
    cursor: 'pointer',
    transition: 'all .3s ease',

    '&:hover': {
      boxShadow: '-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(55, 84, 170, 0.4)',
    },
  },
  largeButton: {
    flex: '0 0 calc(40% + 25px)',
  },
  containedButton: {
    background: '#3A4E89',
    color: '#fff',
    fontSize: '29px',
  },
})

export default function Actions({
  setNumbers,
  numbers,
  signs,
  setSigns,
  temporaryResult,
  setTemporaryResult,
  computeOperation,
  clearNumbers,
}: Props): JSX.Element {
  const { button, containedButton, largeButton } = useStyles()

  const sendNumber = (operator: string) => {
    setTemporaryResult('')
    if (temporaryResult !== '') setNumbers([...numbers, temporaryResult])

    setSigns([...signs, operator])
  }

  return (
    <div>
      <Grid
        container
        spacing={0}
        sx={{ marginTop: '14px', justifyContent: 'space-between' }}
      >
        {ButtonOrder(button, containedButton, largeButton).map((btn) => (
          <Action
            {...btn}
            key={v4()}
            result={temporaryResult}
            setTemporaryResult={setTemporaryResult}
            sendNumber={sendNumber}
            computeOperation={computeOperation}
            clearNumbers={clearNumbers}
          />
        ))}
      </Grid>
    </div>
  )
}
