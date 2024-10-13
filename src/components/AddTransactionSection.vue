<script setup lang="ts">
import { inject, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { TRANSACTIONS_KEY } from '@/types/InjectionKeys'

const transactions = inject(TRANSACTIONS_KEY)

const description = ref('')
const amount = ref('')

const toast = useToast()

const onSubmit = () => {
  if (!description.value || !amount.value) {
    toast.error('Both fields must be filled')
    return
  }
  transactions?.push({
    id: self.crypto.randomUUID(),
    description: description.value,
    amount: +amount.value
  })
  toast.success('Transaction added')
  description.value = ''
  amount.value = ''
}
</script>

<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="description">Description</label>
      <input
        type="text"
        id="description"
        placeholder="Enter description..."
        v-model="description"
      />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input type="number" id="amount" placeholder="Enter amount..." v-model="amount" />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  appearance: none;
  -moz-appearance: textfield;
}
</style>
