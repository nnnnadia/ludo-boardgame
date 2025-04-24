<script setup>
const path = [[1, 6], [1, 7], [1, 8], [1, 9], [1, 10], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10], [6, 11], [6, 12], [6, 13], [6, 14], [6, 15], [7, 15], [8, 15], [9, 15], [10, 15], [10, 14], [10, 13], [10, 12], [10, 11], [10, 10], [11, 10], [12, 10], [13, 10], [14, 10], [15, 10], [15, 9], [15, 8], [15, 7], [15, 6], [14, 6], [13, 6], [12, 6], [11, 6], [10, 6], [10, 5], [10, 4], [10, 3], [10, 2], [10, 1], [9, 1], [8, 1],[7, 1], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [5, 6], [4, 6], [3, 6], [2, 6]]
const totalPath = () => {
  for (let i = 0; i < 6; i++) {
    
  }
}
const zoneGenerator = (moveRight, moveDown) => {
  const zone = []
  for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 6; j++) {
      zone.push(moveDown ? i + 10 : i, moveRight ? j + 10 : j)
    }
  }
  return zone
}

const redZone = zoneGenerator(false, false)
const blueZone = zoneGenerator(true, false)
const yellowZone = zoneGenerator(true, true)
const greenZone = zoneGenerator(false, true)

const isZone = (zone, row, col) => {
  for (let i = 0; i < zone.length; i += 2) {
    if (zone[i] === row && zone[i + 1] === col) {
      return true
    }
  }
}
</script>
<template>
  <div>
    <div v-for="row in 15" :key="row" class="row">
      <div
        v-for="col in 15"
        :key="col"
        class="col"
        :class="{
          'red-zone': isZone(redZone, row, col),
          'blue-zone': isZone(blueZone, row, col),
          'yellow-zone': isZone(yellowZone, row, col),
          'green-zone': isZone(greenZone, row, col),
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
  background: whitesmoke;
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
</style>
