export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.setName(name);
    this._length = this.setLength(length);
    this._students = this.setStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this.setName(value);
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this.setLength(value);
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this.setStudents(value);
  }

  setName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  setLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return length;
  }

  setStudents(students) {
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return students;
  }
}
