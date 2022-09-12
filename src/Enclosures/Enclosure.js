import Animal from '../Animals/Animal';

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
      return true;
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
