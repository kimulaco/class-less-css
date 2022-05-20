import { toOmitValue } from './number'

describe('toOmitValue', () => {
  test('100 -> 100', () => {
    expect(toOmitValue(100)).toBe('100')
  })

  test('1000 -> 1K', () => {
    expect(toOmitValue(1000)).toBe('1K')
  })

  test('1010 -> 1K', () => {
    expect(toOmitValue(1010)).toBe('1K')
  })

  test('1400 -> 1.4K', () => {
    expect(toOmitValue(1400)).toBe('1.4K')
  })

  test('1500 -> 1.5K', () => {
    expect(toOmitValue(1500)).toBe('1.5K')
  })

  test('1600 -> 1.6K', () => {
    expect(toOmitValue(1600)).toBe('1.6K')
  })

  test('1000000 -> 1M', () => {
    expect(toOmitValue(1000000)).toBe('1M')
  })
})
