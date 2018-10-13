class Book {
  constructor(author) {
    this._author = author
  }
  get writer(){
    return this._author
  }
  set writer(updatedAuthor){
    this._author = updatedAuthor
  }
}

const lol = new Book('anonymous')
console.log(lol.writer)  // anonymous
lol.writer = 'wut'
console.log(lol.writer)  // wut