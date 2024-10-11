<script setup lang="ts">
import { inject } from 'vue'
import { TRANSACTIONS_KEY } from '@/types/InjectionKeys'

const transactions = inject(TRANSACTIONS_KEY)
</script>

<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.text"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      <button class="delete-btn">x</button>
      {{ transaction.text }} <span>{{ transaction.amount }}€</span>
    </li>
  </ul>
</template>

<style scoped></style>
