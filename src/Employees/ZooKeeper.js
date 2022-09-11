import Animal from '../Animals/Animal.js';
import Employee from './Employee.js';
import Grass from '../Food/Grass';
import Food from '../Food/Food';

class ZooKeeper extends Employee {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  feedAnimal(animal) {
    if (animal instanceof Animal) {
      animal.feed(new Food(), this);
    }
  }
}

export default ZooKeeper;
