class Animal {
  id;
  requiredSpaceSqFt = 1;
  favouriteFood = [];
  feedTimes = [];
  feedSchedule = [8, 13, 18];
  isSick = false;
  friends = [];
  static current_id = 1;

  constructor() {
    this.id = Animal.current_id++;
  }

  isFriendlyWithAnimal(animal) {
    if (animal instanceof Animal) {
      return this.friends.includes(animal.getType());
    }
    throw new TypeError();
  }
}

export default Animal;
