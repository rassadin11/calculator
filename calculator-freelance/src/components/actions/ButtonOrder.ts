/* eslint-disable  @typescript-eslint/no-explicit-any */
import { Signs } from '../computes/enums'
import { IButtonOrder } from './interfaces'

export function ButtonOrder(
  button: any,
  containedButton: any,
  largeButton: any
): IButtonOrder[] {
  return [
    {
      button,
      symbol: Signs[6],
      number: false,
    },
    {
      button,
      symbol: Signs[4],
      number: false,
    },
    {
      button,
      symbol: Signs[7],
      number: false,
    },
    {
      button: `${button} ${containedButton}`,
      symbol: Signs[3],
      number: false,
    },
    {
      button,
      symbol: '7',
      number: true,
    },
    {
      button,
      symbol: '8',
      number: true,
    },
    {
      button,
      symbol: '9',
      number: true,
    },
    {
      button: `${button} ${containedButton}`,
      symbol: Signs[2],
      number: false,
    },
    {
      button,
      symbol: '4',
      number: true,
    },
    {
      button,
      symbol: '5',
      number: true,
    },
    {
      button,
      symbol: '6',
      number: true,
    },
    {
      button: `${button} ${containedButton}`,
      symbol: Signs[1],
      number: false,
    },
    {
      button,
      symbol: '1',
      number: true,
    },
    {
      button,
      symbol: '2',
      number: true,
    },
    {
      button,
      symbol: '3',
      number: true,
    },
    {
      button: `${button} ${containedButton}`,
      symbol: Signs[0],
      number: false,
    },
    {
      button: `${button} ${largeButton}`,
      symbol: '0',
      number: true,
    },
    {
      button,
      symbol: Signs[8],
      number: false,
    },
    {
      button: `${button} ${containedButton}`,
      symbol: Signs[5],
      number: false,
    },
  ]
}
