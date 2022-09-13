import Mammal from './Mammal.js';

class Lion extends Mammal {
  constructor(isSick) {
    super(isSick);
  }

  requiredSpaceSqFt = 1000;
  friends = [this.getType()];

  getType() {
    return 'Lion';
  }
}

export default Lion;
