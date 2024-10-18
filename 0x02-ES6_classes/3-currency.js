export default class Currency {
  constructor(code, name) {
    this._code = this.setCode(code);
    this._name = this.setName(name);
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = this.setCode(value);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.setName(value);
  }

  setCode(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    return code;
  }

  setName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
