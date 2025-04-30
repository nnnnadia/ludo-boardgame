<script setup>
import { ref } from 'vue'

defineOptions({ name: 'DiceDisplay' })

const diceValue = ref(1)
const isRolling = ref(false)

// Dot positions for each dice face (1-6)
const dots = [
  // 1
  [[50, 50]],
  // 2
  [[30, 30], [70, 70]],
  // 3
  [[30, 30], [50, 50], [70, 70]],
  // 4
  [[30, 30], [30, 70], [70, 30], [70, 70]],
  // 5
  [[30, 30], [30, 70], [50, 50], [70, 30], [70, 70]],
  // 6
  [[30, 30], [30, 50], [30, 70], [70, 30], [70, 50], [70, 70]],
]

function rollDice() {
  isRolling.value = true
  setTimeout(() => {
    diceValue.value = Math.floor(Math.random() * 6) + 1
    isRolling.value = false
  }, 500) // 500ms animation
}
</script>

<template>
  <div class="dice-container">
    <svg
      :class="{ rolling: isRolling }"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="5" width="90" height="90" rx="15" fill="#fff" stroke="#333" stroke-width="4" />
      <g v-for="dot in dots[diceValue - 1]" :key="dot[0] + '-' + dot[1]">
        <circle :cx="dot[0]" :cy="dot[1]" r="8" fill="#333" />
      </g>
    </svg>
    <button @click="rollDice" :disabled="isRolling">Roll Dice</button>
  </div>
</template>

<style scoped>
.dice-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
svg {
  transition: transform 0.5s cubic-bezier(0.4, 2, 0.6, 1);
}
svg.rolling {
  transform: rotate(360deg) scale(1.1);
}
button {
  padding: 0.5rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 8px;
  border: none;
  background: #333;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}
button:disabled {
  background: #aaa;
  cursor: not-allowed;
}
</style>
