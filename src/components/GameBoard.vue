<script setup>
import { findPath } from '../mappings/totalPath'
import { ref } from 'vue'
import { ZONE_SIZE, BOARD_SIZE } from '../constants/board'

/**
 * Generates coordinates for a zone based on its position on the board
 * @param {boolean} moveRight - If true, shifts the zone 10 columns to the right
 * @param {boolean} moveDown - If true, shifts the zone 10 rows down
 * @returns {Array<Array<number>>} Array of [row, col] coordinates representing the zone positions
 */
const zoneGenerator = (moveRight, moveDown) => {
  const zone = []
  for (let r = 1; r <= ZONE_SIZE; r++) {
    for (let c = 1; c <= ZONE_SIZE; c++) {
      const row = r + (moveDown ? 10 : 0)
      const col = c + (moveRight ? 10 : 0)
      zone.push([row, col])
    }
  }
  return zone
}

const redZone = ref(zoneGenerator(false, false))
const blueZone = ref(zoneGenerator(true, false))
const yellowZone = ref(zoneGenerator(true, true))
const greenZone = ref(zoneGenerator(false, true))

/**
 * Checks if a given row and column match a zone or coordinate
 * @param {Array<Array<number>> | Array<number>} zone - Either an array of [row, col] coordinates or a single [row, col] coordinate
 * @param {number} row - The row to check
 * @param {number} col - The column to check
 * @returns {boolean} True if the row and column match the zone or coordinate
 */
const isZone = (zone, row, col) => {
  if (!Array.isArray(zone[0])) {
    // Handle single coordinate case
    return zone[0] === row && zone[1] === col
  }
  // Handle array of coordinates case
  return zone.some(([r, c]) => r === row && c === col)
}

const path = findPath([1, 7])
</script>
<template>
  <div>
    <div v-for="row in BOARD_SIZE" :key="row" class="row">
      <div
        v-for="col in BOARD_SIZE"
        :key="col"
        class="col"
        :class="{
          'red-zone': isZone(redZone, row, col),
          'blue-zone': isZone(blueZone, row, col),
          'yellow-zone': isZone(yellowZone, row, col),
          'green-zone': isZone(greenZone, row, col),
          'path-zone': isZone(path, row, col),
        }"
      >
        {{ row + ', ' + col }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.row {
  display: flex;
}
.col {
  border: solid black 1px;
  color: black;
  font-size: xx-small;
  width: 40px;
  height: 40px;
}
.red-zone {
  background: red;
}
.blue-zone {
  background: blue;
}
.yellow-zone {
  background: yellow;
}
.green-zone {
  background: green;
}
.path-zone {
  background: whitesmoke;
}
</style>
