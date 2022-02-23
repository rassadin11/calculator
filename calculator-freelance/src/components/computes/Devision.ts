// exponential function

export default function expo(x: string, f: number): string {
  return Number.parseFloat(x).toExponential(f)
}
