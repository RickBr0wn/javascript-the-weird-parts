const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const createStore = () => {
  const tables = {
    customer: {
      1: { name: 'John' },
      2: { name: 'Matthew' },
      3: { name: 'Kim' }
    },
    food: {
      1: ['cake', 'waffles'],
      2: ['coffee'],
      3: ['apples', 'carrots']
    }
  }
  return {
    get: (table, id) => delay(500).then(() => tables[table][id])
  }
}

const store = createStore()

const customers = {
  [Symbol.iterator]: () => {
    let i = 0
    return {
      next: async () => {
        i++
        const customer = await store.get('customer', i)
        if(!customer) return { done: true }
        customer.foods = await store.get('food', i)
        return { value: customer, done: false }
      }
    }
  }
}

// Needs BABEL
;(async () => {
  for await (const customer of customers) {
    customer
  }
})()