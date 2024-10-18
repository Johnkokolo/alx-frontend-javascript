// Use Symbol to create a unique identifier for each car instance
const CarSymbol = Symbol('Car');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[CarSymbol] = true; // Associate the symbol with the instance
  }

  // Method to clone the car
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
