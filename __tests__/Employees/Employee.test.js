import ZooKeeper from '../../src/Employees/ZooKeeper.js';
import { expect, test } from '@jest/globals';
import Animal from '../../src/Animals/Animal.js';
import Elephant from '../../src/Animals/Mammals/Elephant.js';
import Lion from '../../src/Animals/Mammals/Lion.js';
import Veterinarian from '../../src/Employees/Veterinarian';

test('Should be able to create ZooKeeper', () => {
  const zooKeeper = new ZooKeeper('firstName', 'lastName');
  expect(zooKeeper.lastName).toBe('lastName');
});

test('Should ZooKeeper be able to feed animal', () => {
  const zooKeeper = new ZooKeeper('firstName', 'lastName');
  expect(zooKeeper.feedAnimal(new Animal()));
});

test('Should be able to add animal experience', () => {
  const zooKeeper = new ZooKeeper('firstName', 'lastName');
  zooKeeper.addAnimalExperience(new Elephant());
  expect(zooKeeper.animalExperience).toContain('Elephant');
});

test('Should be able to check animal experience', () => {
  const zooKeeper = new ZooKeeper('firstName', 'lastName');
  zooKeeper.addAnimalExperience(new Elephant());
  expect(zooKeeper.hasAnimalExperience(new Elephant())).toBeTruthy();
});

test('Should check return false if has no animal experience', () => {
  const zooKeeper = new ZooKeeper('firstName', 'lastName');
  zooKeeper.addAnimalExperience(new Elephant());
  expect(zooKeeper.hasAnimalExperience(new Lion())).toBeFalsy();
});

//

test('Should be able to create Veterinarian', () => {
  const veterinarian = new Veterinarian('firstName', 'lastName');
  expect(veterinarian.lastName).toBe('lastName');
});

test('Should be able Veterinarian to heal animal', () => {
  const veterinarian = new Veterinarian('firstName', 'lastName');
  const elephant = new Elephant(true);

  veterinarian.addAnimalExperience(elephant);
  veterinarian.healAnimal(elephant);

  expect(elephant.isSick).toBeFalsy();
});
