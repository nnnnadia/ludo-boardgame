<script setup>
import { findPath } from '../mappings/totalPath'
import { ref } from 'vue'
import { BOARD_SIZE } from '../constants/board'
import {
  RED_BASE,
  BLUE_BASE,
  YELLOW_BASE,
  GREEN_BASE
} from '../constants/base'
import BoardCell from './BoardCell.vue'

const redBase = ref(RED_BASE)
const blueBase = ref(BLUE_BASE)
const yellowBase = ref(YELLOW_BASE)
const greenBase = ref(GREEN_BASE)

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

const path = findPath([1, 7])
</script>

<template>
  <div>
    <div v-for="row in BOARD_SIZE" :key="row" class="row">
      <BoardCell
        v-for="col in BOARD_SIZE"
        :key="(row - 1) * BOARD_SIZE + col"
        :row="row"
        :col="col"
        :classes="{
          'red-base': onZone(redBase, row, col),
          'blue-base': onZone(blueBase, row, col),
          'yellow-base': onZone(yellowBase, row, col),
          'green-base': onZone(greenBase, row, col),
          'path-square': onZone(path, row, col),
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
}

.red-base {
  background: red;
}

.blue-base {
  background: blue;
}

.yellow-base {
  background: gold;
}

.green-base {
  background: green;
}

.path-square {
  background: whitesmoke;
}
</style>
