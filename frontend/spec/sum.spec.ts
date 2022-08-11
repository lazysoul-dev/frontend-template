import { sum } from '../scripts/sum'

describe('sum', () => {
  it('return sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
