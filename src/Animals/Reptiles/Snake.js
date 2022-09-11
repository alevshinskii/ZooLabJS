import Reptile from './Reptile';

class Snake extends Reptile {
  constructor(props) {
    super(props);
  }

  requiredSpaceSqFt = 2;
  friends = [this.getType()];

  getType() {
    return 'Snake';
  }
}

export default Snake;
