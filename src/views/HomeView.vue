<script setup>
import GameBoard from '../components/GameBoard.vue'
</script>

<template>
  <main>
    <img id="ludo-picture" src="../assets/ludo-picture.jpg" alt="Ludo Board" />
    <GameBoard />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: row;
  align-items: center;
}
#ludo-picture {
  width: 500px;
}
</style>
