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
export const RED_BASE = baseGenerator(false, false)
export const BLUE_BASE = baseGenerator(true, false)
export const YELLOW_BASE = baseGenerator(true, true)
export const GREEN_BASE = baseGenerator(false, true)

// Start positions
export const RED_START = [2, 7] as [number, number]
export const BLUE_START = [7, 14] as [number, number]
export const YELLOW_START = [14, 9] as [number, number]
export const GREEN_START = [9, 2] as [number, number]
