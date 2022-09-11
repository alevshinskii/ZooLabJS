import ZooKeeper from '../../src/Employees/ZooKeeper';
import { expect, test } from '@jest/globals';
import Animal from '../../src/Animals/Animal';
import Elephant from '../../src/Animals/Mammals/Elephant';
import Lion from '../../src/Animals/Mammals/Lion';

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
