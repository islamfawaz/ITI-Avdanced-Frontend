import { Shape } from "./Shape.js";

export class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  CalcArea() {
    return Math.PI * Shape.FastPower(this.radius, 2); 
  }

  CalcPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `Circle Area: ${this.CalcArea()} , Circle Perimeter: ${this.CalcPerimeter()}`;
  }
}
