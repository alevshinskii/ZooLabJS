import HireValidator from './HireValidator';
import ZooKeeper from '../Employees/ZooKeeper';
import Zoo from '../Zoo';

class ZooKeeperHireValidator extends HireValidator {
  zoo;

  constructor(zoo) {
    super();
    this.zoo = zoo;
  }

  validateEmployee(employee) {
    if (employee instanceof ZooKeeper && this.zoo instanceof Zoo) {
      return this.validate(employee);
    }
    throw new TypeError(
      'ZooKeeperHireValidator can not validate employee ' +
        employee.lastName +
        ' for zoo ' +
        this.zoo.location,
    );
  }
}

export default ZooKeeperHireValidator;
