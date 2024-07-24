import { Shape } from "./Shape.js";

export class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }

  CalcArea() {
    return Shape.FastPower(this.length, 2);
  }

  CalcPerimeter() {
    return 4 * this.length;
  }

  toString() {
    return `Square Area: ${this.CalcArea()} , Square Perimeter: ${this.CalcPerimeter()}`;
  }
}
