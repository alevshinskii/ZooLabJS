class HireValidator {
  validateEmployee(employee) {
    throw new Error('Do not use that method, it is abstract');
  }
  validate(employee) {
    let errors = [];
    const animals = this.zoo.getAllAnimals();
    for (let i = 0; i < animals.length; i++) {
      if (!employee.hasAnimalExperience(animals[i])) {
        errors.push(
          'Employee ' +
            employee.lastName +
            ' has no experience with animal ' +
            animals[i].id,
        );
      }
    }
    return errors;
  }
}

export default HireValidator;
