import Mammal from './Mammal';

class Elephant extends Mammal {
  constructor(props) {
    super(props);
  }

  requiredSpaceSqFt = 1000;
  friends = [this.getType(), 'Bison', 'Parrot', 'Turtle'];

  getType() {
    return 'Elephant';
  }
}
export default Elephant;
