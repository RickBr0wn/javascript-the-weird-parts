const randomItem = array => {
  const randomNumber = Math.floor(Math.random()*array.length)
  return array[randomNumber]
}

const makeDragon = () => {
  const dragonSizes = ['big', 'medium', 'tiny']
  const dragonAbilities = ['fire', 'ice', 'lightning']
  return randomItem(dragonSizes) + ' ' + randomItem(dragonAbilities) + ' ' + 'dragon'
}

const dragonArmy = {
  [Symbol.iterator]: function* () {
    while(true) {
      const enoughDragonsSpawned = Math.random() > 0.75
      if(enoughDragonsSpawned) return
      yield makeDragon()
    }
  }
}

for(const dragon of dragonArmy) {
  dragon
}