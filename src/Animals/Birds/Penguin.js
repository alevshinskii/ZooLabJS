import Bird from './Bird';

class Penguin extends Bird {
  constructor(props) {
    super(props);
  }

  requiredSpaceSqFt = 10;
  friends = [this.getType()];

  getType() {
    return 'Penguin';
  }
}

export default Penguin;
