<script setup>
import { findPath } from '../mappings/totalPath'
import { ref } from 'vue'
import { BOARD_SIZE } from '../constants/board'
import {
  WEST_ZONE,
  NORTH_ZONE,
  EAST_ZONE,
  SOUTH_ZONE,
  WEST_COLOR,
  NORTH_COLOR,
  EAST_COLOR,
  SOUTH_COLOR
} from '../constants/base'
import BoardCell from './BoardCell.vue'
import DiceDisplay from './Dice.vue'

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
  <DiceDisplay />
  <div :style="{
    '--west-color': WEST_COLOR,
    '--north-color': NORTH_COLOR,
    '--east-color': EAST_COLOR,
    '--south-color': SOUTH_COLOR
  }">
    <div v-for="row in BOARD_SIZE" :key="row" class="row">
      <BoardCell
        v-for="col in BOARD_SIZE"
        :key="(row - 1) * BOARD_SIZE + col"
        :row="row"
        :col="col"
        :classes="{
          'west-zone': onZone(WEST_ZONE, row, col),
          'north-zone': onZone(NORTH_ZONE, row, col),
          'east-zone': onZone(EAST_ZONE, row, col),
          'south-zone': onZone(SOUTH_ZONE, row, col),
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

.west-zone {
  background: var(--west-color);
}

.north-zone {
  background: var(--north-color);
}

.east-zone {
  background: var(--east-color);
}

.south-zone {
  background: var(--south-color);
}

.path-square {
  background: whitesmoke;
}
</style>
