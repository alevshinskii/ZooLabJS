import Animal from '../Animals/Animal.js';
import Employee from './Employee.js';
import Food from '../Food/Food.js';
import Logger from '../Logger';

class ZooKeeper extends Employee {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    Logger.write('New ZooKeeper created ' + firstName + ' ' + lastName);
  }

  feedAnimal(animal) {
    if (animal instanceof Animal) {
      animal.feed(new Food(), this);
      Logger.write('Animal ' + animal.id + ' fed by ' + this.lastName);
    }
  }
}

export default ZooKeeper;
