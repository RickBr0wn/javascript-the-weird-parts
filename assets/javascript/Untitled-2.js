class Pet{
    constructor(animal, name, age) {
        this.animal = animal
        this.name = name
        this.age = age
    }
}

let animals = ['dog', 'cat', 'mouse', 'rabbit', 'parrot', 'tortoise', 'gerbil']
let names = ['bob', 'shelia', 'mortimer', 'fudgie', 'pooper', 'tom', 'jerry']
let ages = [7, 9, 12, 4, 2, 11, 1]
let list = new Array();

const doubler = num => num*2

const arrayOfObjectsGenerator = () => {
    let arr = new Array();
    for(let i = 0; i < 7; i++){
        let animal = new Pet(animals[i], names[i], ages[i])
        arr.push(animal);
    }
    return arr
}

let pets = arrayOfObjectsGenerator();

pets 
// for (const pet of pets) {
//     doubler(pets.age)
// }
 

// pets.map(() => )

list

console.log(typeof pets);

// for (const item in object) {
    
// }