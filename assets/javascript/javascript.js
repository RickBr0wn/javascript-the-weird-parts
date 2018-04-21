class Rect {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    statement(){
        return console.log(`I'm a rectangle, my height is ${this.height} and my width is ${this.width}`);
    }
}

let rect = new Rect(10, 20);
let rect2 = new Rect(60, 60);