import { selectPath } from './pathSelector'

const findPath = (coordinates: number[], pathType: 'normal' | 'short' = 'normal'): number[][] => {
  const duplicatedPath = selectPath(pathType)
  const startIndex = duplicatedPath.findIndex(
    ([x, y]) => x === coordinates[0] && y === coordinates[1],
  )

  if (startIndex === -1) {
    throw new Error('Starting coordinates not found in path')
  }

  const pathLength = duplicatedPath.length / 2
  return duplicatedPath.slice(startIndex, startIndex + pathLength)
}

export { findPath }
