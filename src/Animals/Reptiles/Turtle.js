import Reptile from './Reptile';

class Turtle extends Reptile {
  constructor(isSick) {
    super(isSick);
  }

  requiredSpaceSqFt = 5;
  friends = [this.getType(), 'Parrot', 'Bison', 'Elephant'];

  getType() {
    return 'Turtle';
  }
}

export default Turtle;
