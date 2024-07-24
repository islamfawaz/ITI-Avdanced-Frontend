import { Rectangle } from "./Classes/Rectanlge.js";
import { Square } from "./Classes/Square.js";
import { Circle } from "./Classes/Circle.js";

let rectangle1 = new Rectangle(2, 4);
console.log(rectangle1.toString()); 

let rectangle2 = new Rectangle(3, 6);
console.log(rectangle2.toString()); 

let rectangle3 = new Rectangle(4, 8);
console.log(rectangle3.toString()); 
let square = new Square(2);
console.log(square.toString()); 

let circle = new Circle(4);
console.log(circle.toString()); 

console.log(`Number of  instances created: ${Rectangle.getInstanceCount()}`);
 