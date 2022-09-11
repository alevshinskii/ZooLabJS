import Bird from './Bird';

class Parrot extends Bird {
  constructor(props) {
    super(props);
  }

  requiredSpaceSqFt = 5;
  friends = [this.getType(), 'Elephant', 'Bison', 'Turtle'];

  getType() {
    return 'Parrot';
  }
}

export default Parrot;
