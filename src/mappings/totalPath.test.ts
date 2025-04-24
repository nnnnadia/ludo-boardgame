import { findPath } from './totalPath'

describe('findPath', () => {
  it('should return a path starting from given coordinates', () => {
    const startCoordinates = [1, 6]
    const path = findPath(startCoordinates)

    // Check if path starts with the given coordinates
    expect(path[0]).toEqual(startCoordinates)
  })

  it('should return a path with length equal to half of duplicatedPath', () => {
    const path = findPath([1, 6])
    const expectedLength = 56 // Since one complete path is 56 coordinates

    expect(path.length).toBe(expectedLength)
  })

  it('should throw error when coordinates are not found', () => {
    const invalidCoordinates = [999, 999]

    expect(() => findPath(invalidCoordinates)).toThrow('Starting coordinates not found in path')
  })

  it('should return a path that ends at the last pair before the starting point reappears', () => {
    const startCoordinates = [1, 6]
    const path = findPath(startCoordinates)

    // The last pair should be [2, 6] since that's the last pair before [1, 6] appears again
    expect(path[path.length - 1]).toEqual([2, 6])
  })

  it('should return consecutive pairs from the path', () => {
    const path = findPath([1, 6])

    // Check if pairs are consecutive by verifying a few known sequences
    expect(path[0]).toEqual([1, 6])
    expect(path[1]).toEqual([1, 7])
    expect(path[2]).toEqual([1, 8])
    expect(path[3]).toEqual([1, 9])
    expect(path[4]).toEqual([1, 10])
  })
})
