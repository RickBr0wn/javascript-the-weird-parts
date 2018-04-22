data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
];

let isDog = animal => animal.type === 'dog';
let dogYears = animal => animal.age * 7;
let sum = (sum, animal) => sum + animal;

let ages = data
    .filter(isDog)
    .map(dogYears)
    .reduce(sum);

console.log(ages);