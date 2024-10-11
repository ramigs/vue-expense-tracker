<script setup lang="ts">
import { computed, inject } from 'vue'
import { TRANSACTIONS_KEY } from '@/types/InjectionKeys'

const transactions = inject(TRANSACTIONS_KEY)

const balance = computed(() => {
  return transactions?.reduce((acc, transaction) => {
    return acc + transaction.amount
  }, 0)
})
</script>

<template>
  <h4>Your Balance</h4>
  <h1 id="balance">${{ balance }}</h1>
</template>

<style scoped></style>
