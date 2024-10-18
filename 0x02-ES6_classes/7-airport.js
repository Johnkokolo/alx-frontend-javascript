export default class Airport {
  constructor(name, code) {
    this._name = name;  // Store name in _name
    this._code = code;  // Store code in _code
  }

  // Override toString method to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}
