import type { InjectionKey } from 'vue'
import type { Transaction } from './Transaction'

export const TRANSACTIONS_KEY: InjectionKey<Array<Transaction>> = Symbol('Transactions Key')
