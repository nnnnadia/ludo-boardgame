import { BASE_SIZE } from './board'

/**
 * Generates coordinates for a base based on its position on the board
 * @param {boolean} moveRight - If true, shifts the base 10 columns to the right
 * @param {boolean} moveDown - If true, shifts the base 10 rows down
 * @returns {Array<Array<number>>} Array of [row, col] coordinates representing the base positions
 */
const baseGenerator = (moveRight: boolean, moveDown: boolean): Array<Array<number>> => {
  const base = []
  for (let r = 1; r <= BASE_SIZE; r++) {
    for (let c = 1; c <= BASE_SIZE; c++) {
      const row = r + (moveDown ? 10 : 0)
      const col = c + (moveRight ? 10 : 0)
      base.push([row, col])
    }
  }
  return base
}

// Base positions
export const WEST_BASE = baseGenerator(false, false)
export const NORTH_BASE = baseGenerator(true, false)
export const EAST_BASE = baseGenerator(true, true)
export const SOUTH_BASE = baseGenerator(false, true)

// Home positions
export const WEST_HOME = [[2, 2], [2, 4], [4, 2], [4, 4]] as [number, number][]
export const NORTH_HOME = [[2, 12], [2, 14], [4, 12], [4, 14]] as [number, number][]
export const EAST_HOME = [[12, 12], [12, 14], [14, 12], [14, 14]] as [number, number][]
export const SOUTH_HOME = [[12, 2], [12, 4], [14, 2], [14, 4]] as [number, number][]

// Start positions
export const WEST_START = [7, 1] as [number, number]
export const NORTH_START = [1, 9] as [number, number]
export const EAST_START = [9, 15] as [number, number]
export const SOUTH_START = [15, 7] as [number, number]

// Final line positions
export const WEST_HOME_STRETCH = [
  [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7]
] as [number, number][]
export const NORTH_HOME_STRETCH = [
  [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8]
] as [number, number][]
export const EAST_HOME_STRETCH = [
  [8, 14], [8, 13], [8, 12], [8, 11], [8, 10], [8, 9]
] as [number, number][]
export const SOUTH_HOME_STRETCH = [
  [14, 8], [13, 8], [12, 8], [11, 8], [10, 8], [9, 8]
] as [number, number][]

// Last position
export const WEST_LAST = WEST_HOME_STRETCH[WEST_HOME_STRETCH.length - 1] as [number, number]
export const NORTH_LAST = NORTH_HOME_STRETCH[NORTH_HOME_STRETCH.length - 1] as [number, number]
export const EAST_LAST = EAST_HOME_STRETCH[EAST_HOME_STRETCH.length - 1] as [number, number]
export const SOUTH_LAST = SOUTH_HOME_STRETCH[SOUTH_HOME_STRETCH.length - 1] as [number, number]

// Every position zone
export const WEST_ZONE = [...WEST_BASE, ...WEST_HOME_STRETCH]
export const NORTH_ZONE = [...NORTH_BASE, ...NORTH_HOME_STRETCH]
export const EAST_ZONE = [...EAST_BASE, ...EAST_HOME_STRETCH]
export const SOUTH_ZONE = [...SOUTH_BASE, ...SOUTH_HOME_STRETCH]

// Player color constants
export const WEST_COLOR = 'red'
export const NORTH_COLOR = 'blue'
export const EAST_COLOR = 'gold'
export const SOUTH_COLOR = 'green'
