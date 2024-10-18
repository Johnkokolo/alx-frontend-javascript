import Car from "./10-car.js";

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent class constructor
    super(brand, motor, color);
    this._range = range; // Store range in an underscore-prefixed property
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
