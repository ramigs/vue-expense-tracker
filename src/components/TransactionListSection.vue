<script setup lang="ts">
import { inject } from 'vue'
import { TRANSACTIONS_KEY } from '@/types/InjectionKeys'

const transactions = inject(TRANSACTIONS_KEY)

const onDelete = (index: number) => {
  transactions?.splice(index, 1)
}
</script>

<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="(transaction, index) in transactions"
      :key="transaction.description"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      <button class="delete-btn" @click="onDelete(index)">x</button>
      {{ transaction.description }} <span>{{ transaction.amount }}€</span>
    </li>
  </ul>
</template>

<style scoped></style>
