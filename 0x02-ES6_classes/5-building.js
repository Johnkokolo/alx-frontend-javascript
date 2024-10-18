export default class Building {
  constructor(sqft) {
    this._sqft = this.setSqft(sqft);
  }

  get sqft() {
    return this._sqft;
  }

  setSqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    return sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
