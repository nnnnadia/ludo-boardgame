<script setup>
import {
  RED_START,
  BLUE_START,
  YELLOW_START,
  GREEN_START
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
 * Checks if a given row and column correspond to any of the colored start positions
 * @param {number} row - The row to check
 * @param {number} col - The column to check
 * @returns {boolean} True if the position is any of the colored start squares
 */
const isStart = (row, col) => {
  return onSquare(RED_START, row, col) ||
         onSquare(BLUE_START, row, col) ||
         onSquare(YELLOW_START, row, col) ||
         onSquare(GREEN_START, row, col)
}
</script>

<template>
  <div
    class="cell"
    :class="{
      ...classes,
      'red-start': onSquare(RED_START, row, col),
      'blue-start': onSquare(BLUE_START, row, col),
      'yellow-start': onSquare(YELLOW_START, row, col),
      'green-start': onSquare(GREEN_START, row, col),
    }"
  >
    <p class="cell-map-label">{{ row + ', ' + col }}</p>
    <div
      v-if="isStart(row, col)"
      :class="[
        'star',
        {
          'red-start': onSquare(RED_START, row, col),
          'blue-start': onSquare(BLUE_START, row, col),
          'yellow-start': onSquare(YELLOW_START, row, col),
          'green-start': onSquare(GREEN_START, row, col),
        }
      ]"
    />
  </div>
</template>

<style scoped>
.cell {
  border: solid black 1px;
  color: gray;
  font-size: xx-small;
  width: 40px;
  height: 40px;
}

.cell-map-label {
  position: absolute;
}

.red-start {
  color: red;
}

.blue-start {
  background: blue;
}

.yellow-start {
  background: gold;
}

.green-start {
  background: green;
}

.star {
  width: 38px;
  height: 38px;
  display: inline-block;
  -webkit-mask: url('../assets/star.svg') no-repeat center/contain;
  mask: url('../assets/star.svg') no-repeat center/contain;
  background: gray; /* fallback */
}
.red-start.star {
  background: red;
}
.blue-start.star {
  background: blue;
}
.yellow-start.star {
  background: gold;
}
.green-start.star {
  background: green;
}
</style>
