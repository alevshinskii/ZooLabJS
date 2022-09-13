import Bird from './Bird';

class Penguin extends Bird {
  constructor(isSick) {
    super(isSick);
  }

  requiredSpaceSqFt = 10;
  friends = [this.getType()];

  getType() {
    return 'Penguin';
  }
}

export default Penguin;
