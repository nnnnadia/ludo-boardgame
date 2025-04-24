import { selectPath } from './pathSelector'
import { normalPath, shortPath } from '../constants/paths'

describe('selectPath', () => {
  it('should return duplicated normal path when pathType is normal', () => {
    const result = selectPath('normal')
    expect(result).toEqual([...normalPath, ...normalPath])
  })

  it('should return duplicated short path when pathType is short', () => {
    const result = selectPath('short')
    expect(result).toEqual([...shortPath, ...shortPath])
  })

  it('should have correct length for normal path', () => {
    const result = selectPath('normal')
    expect(result.length).toBe(normalPath.length * 2)
  })

  it('should have correct length for short path', () => {
    const result = selectPath('short')
    expect(result.length).toBe(shortPath.length * 2)
  })

  it('should maintain path order in duplication', () => {
    const result = selectPath('normal')
    const firstHalf = result.slice(0, normalPath.length)
    const secondHalf = result.slice(normalPath.length)
    expect(firstHalf).toEqual(normalPath)
    expect(secondHalf).toEqual(normalPath)
  })
})
