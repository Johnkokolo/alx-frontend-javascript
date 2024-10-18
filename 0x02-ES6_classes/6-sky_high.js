import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor
    this._floors = this.setFloors(floors); // Set floors with validation
  }

  get floors() {
    return this._floors;
  }

  setFloors(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    return floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
