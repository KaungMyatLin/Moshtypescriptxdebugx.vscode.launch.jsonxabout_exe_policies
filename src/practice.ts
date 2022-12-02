let sales: number = 123_456
let course: string = 'Typescript'
let is_published: boolean = true
let level;
// don't have to annotate with ";".

function render (document:any) {
    console.log(document)
}

let numbers: number [] = [];
numbers.forEach(n => n.toFixed)

enum Size {Small = 1, Medium, Large}
let mySize: Size = Size.Medium;
console.log(mySize)

const enum Size_2 {Small = 1, Medium, Large}
let mySize_2: Size_2 = Size_2.Medium;
console.log(mySize_2)

