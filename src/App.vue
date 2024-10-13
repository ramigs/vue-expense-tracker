<script setup lang="ts">
import { provide, ref, type Ref, onMounted } from 'vue'
import AddTransactionSection from './components/AddTransactionSection.vue'
import HeaderSection from './components/HeaderSection.vue'
import IncomeExpensesSection from './components/IncomeExpensesSection.vue'
import TransactionListSection from './components/TransactionListSection.vue'
import type { Transaction } from './types/Transaction'
import { TRANSACTIONS_KEY } from './types/InjectionKeys'

const transactions: Ref<Array<Transaction>> = ref([])

onMounted(() => {
  const savedTransactions = localStorage.getItem('transactions')

  if (savedTransactions) {
    transactions.value = JSON.parse(savedTransactions)
  }
})

provide(TRANSACTIONS_KEY, transactions.value)
</script>

<template>
  <main>
    <HeaderSection />
    <IncomeExpensesSection />
    <TransactionListSection />
    <AddTransactionSection />
  </main>
</template>

<style scoped></style>
