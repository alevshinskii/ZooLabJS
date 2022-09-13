import Food from '../Food/Food.js';
import Medicine from '../Medicine/Medicine.js';
import FeedTime from './FeedTime.js';

class Animal {
  id;
  requiredSpaceSqFt = 1;
  favouriteFood = [new Food().toString()];
  feedTimes = [];
  feedSchedule = [8, 13, 18];
  isSick = false;
  friends = [];
  static current_id = 1;

  constructor(isSick) {
    this.id = Animal.current_id++;
    this.isSick = isSick;
  }

  isFriendlyWithAnimal(animal) {
    if (animal instanceof Animal) {
      return (
        this.friends.includes(animal.getType()) &&
        animal.friends.includes(this.getType())
      );
    }
  }

  addFeedSchedule(newSchedule) {
    if (newSchedule instanceof Array) {
      this.feedSchedule = newSchedule;
    }
  }

  feed(food, byZooKeeper) {
    if (food instanceof Food && this.favouriteFood.includes(food.toString())) {
      const feedTime = new FeedTime(new Date(), byZooKeeper);
      this.feedTimes.push(feedTime);
      return true;
    }
  }

  heal(medicine) {
    if (medicine instanceof Medicine) {
      this.isSick = false;
      return true;
    }
  }

  getType() {
    return this.constructor.name.toString();
  }
}

export default Animal;
