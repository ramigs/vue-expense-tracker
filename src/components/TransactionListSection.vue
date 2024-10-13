<script setup lang="ts">
import { inject } from 'vue'
import { TRANSACTIONS_KEY } from '@/types/InjectionKeys'
import { useToast } from 'vue-toastification'

const transactions = inject(TRANSACTIONS_KEY)

const toast = useToast()

const onDelete = (index: number) => {
  transactions?.splice(index, 1)
  toast.success('Transaction deleted')
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
