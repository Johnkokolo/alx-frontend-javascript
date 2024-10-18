export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;        // Store size in _size
    this._location = location; // Store location in _location
  }

  // When cast to Number, return the size
  valueOf() {
    return this._size;
  }

  // When cast to String, return the location
  toString() {
    return this._location;
  }
}
