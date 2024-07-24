import { Shape } from "./Shape.js";

export class Rectangle extends Shape {
  static instanceCount = 0;
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
    Rectangle.instanceCount++;

  }

  CalcArea() {
    return this.width * this.height;
  }

  CalcPerimeter() {
    return 2 * (this.width + this.height);
  }

  toString() {
    return `Rectangle Area: ${this.CalcArea()} , Rectangle Perimeter: ${this.CalcPerimeter()}`;
  }
  static getInstanceCount() {
    return Rectangle.instanceCount;
  }
}
