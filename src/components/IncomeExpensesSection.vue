<script setup lang="ts">
import { computed, inject } from 'vue'
import { TRANSACTIONS_KEY } from '@/types/InjectionKeys'

const transactions = inject(TRANSACTIONS_KEY)

const income = computed(() => {
  return transactions
    ?.filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0)
    .toFixed(2)
})

const expenses = computed(() => {
  return transactions
    ?.filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0)
    .toFixed(2)
})
</script>

<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+${{ income }}</p>
    </div>
    <div>
      <h4>Expenses</h4>
      <p id="money-minus" class="money minus">-${{ expenses }}</p>
    </div>
  </div>
</template>

<style scoped></style>
