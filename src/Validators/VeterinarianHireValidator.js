import HireValidator from './HireValidator';
import Veterinarian from '../Employees/Veterinarian';
import Zoo from '../Zoo';

class VeterinarianHireValidator extends HireValidator {
  zoo;

  constructor(zoo) {
    super();
    this.zoo = zoo;
  }

  validateEmployee(employee) {
    if (employee instanceof Veterinarian && this.zoo instanceof Zoo) {
      return this.validate(employee);
    }
    throw new TypeError(
      'VeterinarianHireValidator can not validate employee ' +
        employee +
        ' for zoo ' +
        this.zoo,
    );
  }
}

export default VeterinarianHireValidator;
