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
    {{ row + ', ' + col }}
  </div>
</template>

<style scoped>
.cell {
  border: solid black 1px;
  color: black;
  font-size: xx-small;
  width: 40px;
  height: 40px;
}

.red-start {
  background-image: url(../assets/star.svg);
  background-size: cover;
  background-position: center;
}

.blue-start {
  background: blue;
}

.yellow-start {
  background: yellow;
}

.green-start {
  background: green;
}
</style>
