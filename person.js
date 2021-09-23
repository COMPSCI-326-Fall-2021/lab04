'use strict'

class Person {
  constructor (name) {
    this._name = name;
  }get name () {
    return this._name;
  }set name (newName) {
    this._name = newName;
  }printName () {
    console.log(this._name);
  }
}
const p = new Person('Firstname Lastname');
p.printName()
