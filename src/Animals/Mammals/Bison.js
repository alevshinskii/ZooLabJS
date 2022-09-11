import Mammal from './Mammal';

class Bison extends Mammal {
  constructor(props) {
    super(props);
  }

  requiredSpaceSqFt = 1000;
  friends = [this.getType(), 'Elephant'];

  getType() {
    return 'Bison';
  }
}

export default Bison;
