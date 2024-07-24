export class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error("You cannot create an instance of an abstract class.");
      }
    }
  
    CalcArea() {
      throw new Error("Method 'CalcArea()' must be implemented.");
    }
  
    CalcPerimeter() {
      throw new Error("Method 'CalcPerimeter()' must be implemented.");
    }
  
    static FastPower(base, exponent) {
      if (exponent === 0) {
        return 1;
      }
      if (exponent < 0) {
        base = 1 / base;
        exponent = -exponent;
      }
      if (exponent % 2 === 0) {
        const halfPower = Shape.FastPower(base, Math.floor(exponent / 2));
        return halfPower * halfPower;
      } else {
        const halfPower = Shape.FastPower(base, Math.floor(exponent / 2));
        return base * halfPower * halfPower;
      }
    }
  }
  