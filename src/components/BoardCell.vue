<script setup>
import {
  WEST_BASE,
  NORTH_BASE,
  EAST_BASE,
  SOUTH_BASE,
  WEST_START,
  NORTH_START,
  EAST_START,
  SOUTH_START,
  WEST_COLOR,
  NORTH_COLOR,
  EAST_COLOR,
  SOUTH_COLOR,
  WEST_HOME,
  NORTH_HOME,
  EAST_HOME,
  SOUTH_HOME
} from '../constants/base'

const props = defineProps({
  row: {
    type: Number,
    required: true
  },
  col: {
    type: Number,
    required: true
  },
  classes: {
    type: Object,
    default: () => ({})
  }
})

/**
 * Checks if a given row and column match any coordinate in a zone
 * @param {Array<Array<number>>} zone - Array of [row, col] coordinates
 * @param {number} row - The row to check
 * @param {number} col - The column to check
 * @returns {boolean} True if the row and column match any coordinate in the zone
 */
 const onZone = (zone, row, col) => {
  return zone.some(([r, c]) => r === row && c === col)
}

/**
 * Checks if a given row and column match a single coordinate
 * @param {[number, number]} coordinate - A single [row, col] coordinate
 * @param {number} row - The row to check
 * @param {number} col - The column to check
 * @returns {boolean} True if the row and column match the coordinate
 */
const onSquare = (coordinate, row, col) => {
  return coordinate[0] === row && coordinate[1] === col
}

/**
 * Checks if a given row and column correspond to a cell on the board
 * @param {number} row - The row index of the cell
 * @param {number} col - The column index of the cell
 * @returns {boolean} True if the position is a cell on the board, false otherwise
 */
const isSquare = (row, col) => {
  return !onZone(WEST_BASE, row, col) &&
         !onZone(NORTH_BASE, row, col) &&
         !onZone(EAST_BASE, row, col) &&
         !onZone(SOUTH_BASE, row, col)
}


/**
 * Checks if a given row and column correspond to any of the colored start positions
 * @param {number} row - The row to check
 * @param {number} col - The column to check
 * @returns {boolean} True if the position is any of the colored start squares
 */
const isStart = (row, col) => {
  return onSquare(WEST_START, row, col) ||
         onSquare(NORTH_START, row, col) ||
         onSquare(EAST_START, row, col) ||
         onSquare(SOUTH_START, row, col)
}

/**
 * Checks if a given row and column correspond to any of the colored home positions
 * @param {number} row - The row to check
 * @param {number} col - The column to check
 * @returns {boolean} True if the position is any of the colored home squares
 */
const isHome = (row, col) => {
  return onZone(WEST_HOME, row, col) ||
         onZone(NORTH_HOME, row, col) ||
         onZone(EAST_HOME, row, col) ||
         onZone(SOUTH_HOME, row, col)
}

/**
 * Returns the type of center cell based on its row and column coordinates.
 * @param {number} row - The row index of the cell.
 * @param {number} col - The column index of the cell.
 * @returns {string|null} The type of the center cell (e.g., 'nw', 'n', 'ne', 'w', 'c', 'e', 'sw', 's', 'se'), or null if not a center cell.
 */
const getCenterCellType = (row, col) => {
  const map = {
    '7,7': 'nw', '7,8': 'n', '7,9': 'ne',
    '8,7': 'w', '8,8': 'c', '8,9': 'e',
    '9,7': 'sw', '9,8': 's', '9,9': 'se',
  }
  return map[`${row},${col}`] || null
}
</script>

<template>
  <div
    class="cell"
    :style="{
      '--west-color': WEST_COLOR,
      '--north-color': NORTH_COLOR,
      '--east-color': EAST_COLOR,
      '--south-color': SOUTH_COLOR
    }"
    :class="{
      ...classes,
      'square': isSquare(row, col),
      'west-start': onSquare(WEST_START, row, col),
      'north-start': onSquare(NORTH_START, row, col),
      'east-start': onSquare(EAST_START, row, col),
      'south-start': onSquare(SOUTH_START, row, col),
      [`center-${getCenterCellType(row, col)}`]: getCenterCellType(row, col)
    }"
  >
    <p class="cell-map-label">{{ row + ', ' + col }}</p>
    <div
      v-if="isStart(row, col)"
      :class="[
        'star',
        {
          'west-start': onSquare(WEST_START, row, col),
          'north-start': onSquare(NORTH_START, row, col),
          'east-start': onSquare(EAST_START, row, col),
          'south-start': onSquare(SOUTH_START, row, col),
        }
      ]"
    />
    <div
      v-if="isHome(row, col)"
      class="home"
    />
  </div>
</template>

<style scoped>
.cell {
  width: 40px;
  height: 40px;
  font-size: xx-small;
}
.square {
  border: solid black 1px;
  color: gray;
}

.cell-map-label {
  position: absolute;
  display: none;
}

.star {
  width: 38px;
  height: 38px;
  display: inline-block;
  -webkit-mask: url('../assets/star.svg') no-repeat center/contain;
  mask: url('../assets/star.svg') no-repeat center/contain;
  background: gray; /* fallback */
}
.west-start.star {
  background: var(--west-color);
}
.north-start.star {
  background: var(--north-color);
}
.east-start.star {
  background: var(--east-color);
}
.south-start.star {
  background: var(--south-color);
}

.home {
  width: 50px;
  height: 50px;
  background: whitesmoke;
  border: solid black 1px;
  border-radius: 50%;
  position: relative;
  top: -6px;
  left: -6px;
}

.center-nw {
  background: conic-gradient(var(--north-color) 134deg, var(--west-color) 134deg 315deg, var(--north-color) 315deg);
}
.center-ne {
  background: conic-gradient(var(--north-color) 45deg, var(--east-color) 45deg 225deg, var(--north-color) 225deg)
}
.center-c {
  background: conic-gradient(var(--north-color) 45deg, var(--east-color) 45deg 135deg, var(--south-color) 135deg 225deg, var(--west-color) 225deg 315deg, var(--north-color) 315deg)
}
.center-sw {
  background: conic-gradient(var(--west-color) 45deg, var(--south-color) 45deg 225deg, var(--west-color) 225deg)
}
.center-se {
  background: conic-gradient(var(--east-color) 134deg, var(--south-color) 134deg 315deg, var(--east-color) 315deg)
}
</style>
