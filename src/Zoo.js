import Animal from './Animals/Animal.js';

class Zoo {
  location = '';
  enclosures = [];
  employees = [];

  constructor(location) {
    this.location = location;
  }

  addEnclosure(enclosure) {
    if (enclosure instanceof Enclosure) this.enclosures.push(enclosure);
  }

  hireEmployee(employee) {
    if (employee instanceof Employee) this.employees.push(employee);
  }

  findAvailableEnclosure(animal) {
    if (animal instanceof Animal) {
    }
  }
}
