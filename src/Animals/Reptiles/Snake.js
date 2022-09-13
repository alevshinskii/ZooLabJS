import Reptile from './Reptile';

class Snake extends Reptile {
  constructor(isSick) {
    super(isSick);
  }

  requiredSpaceSqFt = 2;
  friends = [this.getType()];

  getType() {
    return 'Snake';
  }
}

export default Snake;
