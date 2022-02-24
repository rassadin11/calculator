import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/',
})

export async function setOperations(
  numbers: string[],
  operations: string[],
  result: string
) {
  let exersize = ''

  numbers.forEach((number, idx) => {
    let oper = operations[idx]
    if (operations[idx] === '÷') oper = ':'

    exersize += String(number)
    if (oper) exersize += oper
  })

  if (+exersize !== +result) {
    return await instance.post('expression', {
      expression: exersize,
      result,
    })
  }
}

export async function getOperations() {
  const data = await instance
    .get('expression')
    .then((response: { data: any }) => response.data)
  console.log(data)
  return data
}
