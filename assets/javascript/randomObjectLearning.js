export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload)]
}

const state = {
  first: 'rick',
  last: 'brown',
}

const payload = {
  event: 'test',
  name: 'rick',
}

const test = Object.assign({}, payload) //?
typeof test.event //?
const descriptors = Object.getOwnPropertyDescriptors(test) //?
const event = descriptors.event //?

const event2 = String(Object.keys(state).filter(i => i === 'first')) //?

createEvent(state, payload) //?
