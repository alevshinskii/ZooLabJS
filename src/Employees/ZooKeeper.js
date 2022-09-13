import Animal from '../Animals/Animal.js';
import Employee from './Employee.js';
import Food from '../Food/Food.js';

class ZooKeeper extends Employee {
  feedAnimal(animal) {
    if (animal instanceof Animal) {
      animal.feed(new Food(), this);
      return true;
    }
  }
}

export default ZooKeeper;
