import Employee from '../Employees/Employee';
import Veterinarian from '../Employees/Veterinarian';
import ZooKeeper from '../Employees/ZooKeeper';
import VeterinarianHireValidator from './VeterinarianHireValidator';
import ZooKeeperHireValidator from './ZooKeeperHireValidator';
import Zoo from '../Zoo';

class HireValidatorProvider {
  zoo;

  constructor(zoo) {
    if (zoo instanceof Zoo) this.zoo = zoo;
    else
      throw new TypeError(
        'Can not create HireValidatorProvider because of zoo ' + zoo,
      );
  }

  getValidator(employee) {
    if (employee instanceof Employee) {
      if (employee instanceof ZooKeeper) {
        return new ZooKeeperHireValidator(this.zoo);
      } else if (employee instanceof Veterinarian) {
        return new VeterinarianHireValidator(this.zoo);
      }
    }
    throw new TypeError("Can't find validator for employee " + employee);
  }
}

export default HireValidatorProvider;
