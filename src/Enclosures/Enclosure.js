import Animal from '../Animals/Animal';
import Logger from '../Logger';

class Enclosure {
  name;
  squareFeet;
  parentZoo;

  animals;

  constructor(name, squareFeet) {
    this.name = name;
    this.squareFeet = squareFeet;
    this.animals = [];
  }

  addAnimal(animal) {
    if (animal instanceof Animal) {
      this.animals.push(animal);
      Logger.write(
        'Animal with id ' + animal.id + ' added to enclosure ' + this.name,
      );
    }
  }

  isFriendlyForAnimal(animal) {
    if (animal instanceof Animal) {
      for (let i = 0; i < this.animals.length; i++) {
        if (!this.animals[i].isFriendlyWithAnimal(animal)) return false;
      }
      return true;
    }
  }

  availableSpace() {
    let availableSpace = this.squareFeet;
    for (let i = 0; i < this.animals.length; i++) {
      availableSpace -= this.animals[i].requiredSpaceSqFt;
    }
    return availableSpace;
  }
}

export default Enclosure;
