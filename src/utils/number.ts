const VALUE_UNIT: string[] = ['', 'K', 'M', 'G', 'T']
const OMIT_DIGITS = 3

export const toOmitValue = (value: number): string => {
  const isNegative = value < 0
  const absValue = Math.abs(value)

  if (absValue < 10 ** OMIT_DIGITS) {
    return String(absValue * (isNegative ? -1 : 1))
  }

  const unitLevel = Math.min(
    Math.floor(String(absValue).length / OMIT_DIGITS),
    VALUE_UNIT.length - 1,
  )
  const omitAbsValue = absValue / (10 ** OMIT_DIGITS) ** unitLevel
  const resultValue =
    (Math.round(omitAbsValue * 10) / 10) * (isNegative ? -1 : 1)
  return `${resultValue}${VALUE_UNIT[unitLevel] || ''}`
}
