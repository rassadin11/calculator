import React from 'react'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/styles'
import { v4 } from 'uuid'

interface Props {
  result: string | number
}

const theme = createTheme({
  typography: {
    fontFamily: ['Digital Numbers'].join(','),
  },
})

const Result = ({ result }: Props): JSX.Element => {
  if (isNaN(+result)) result = 0
  const numbers = result.toString().split('')

  // letter for background zeros
  while (numbers.length < 10) {
    numbers.push('z')
  }

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          padding: '20px',
          background: 'linear-gradient(92.94deg, #CAD4C5 0%, #B2BFA5 100%)',
          boxShadow: 'inset 0px 0px 9px rgba(0, 0, 0, 0.25)',
          borderRadius: '10px',
          marginTop: '24px',
        }}
      >
        <div
          style={{
            fontSize: 42,
            fontFamily: 'Digital Numbers',
            lineHeight: 1,
            height: '100%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          {numbers.map((numb) => (
            <span key={v4()} style={{ position: 'relative' }}>
              {numb !== 'z' ? (
                numb
              ) : (
                <span style={{ opacity: 0, visibility: 'hidden', width: 0 }}>
                  {numb}
                </span>
              )}
              {numb !== '.' && (
                <span
                  style={{
                    position: 'absolute',
                    top: 5.4,
                    left: 0,
                    opacity: 0.15,
                  }}
                >
                  0
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Result
