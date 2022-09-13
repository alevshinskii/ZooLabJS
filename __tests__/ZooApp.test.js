import { expect, test } from '@jest/globals';
import ZooApp from '../src/ZooApp';
import Zoo from '../src/Zoo';
import Logger from '../src/Logger';
import Parrot from '../src/Animals/Birds/Parrot';
import Penguin from '../src/Animals/Birds/Penguin';
import Elephant from '../src/Animals/Mammals/Elephant';
import Lion from '../src/Animals/Mammals/Lion';
import Bison from '../src/Animals/Mammals/Bison';
import Snake from '../src/Animals/Reptiles/Snake';
import Turtle from '../src/Animals/Reptiles/Turtle';
import Enclosure from '../src/Enclosures/Enclosure';
import ZooKeeper from '../src/Employees/ZooKeeper';
import Veterinarian from '../src/Employees/Veterinarian';

test('Should be able to create ZooApp', () => {
  const zooApp = new ZooApp();
  expect(zooApp).toBeDefined();
});

test('Should be able to add/get zoos from ZooApp', () => {
  const zooApp = new ZooApp();
  zooApp.addZoo(new Zoo('Zoo 1'));
  zooApp.addZoo(new Zoo('Zoo 2'));
  expect(zooApp.getZoos().length).toBe(2);
});

test('ZooApp Test Run', () => {
  const zooApp = new ZooApp();

  const zoo1 = new Zoo('Zoo 1');
  const zoo2 = new Zoo('Zoo 2');

  zooApp.addZoo(zoo1);
  zooApp.addZoo(zoo2);

  const parrot = new Parrot(true);
  const penguin = new Penguin(true);
  const bison = new Bison(true);
  const elephant = new Elephant(true);
  const lion = new Lion(true);
  const snake = new Snake(true);
  const turtle = new Turtle(true);

  const animals = [parrot, penguin, bison, elephant, lion, snake, turtle];

  const keeper1 = new ZooKeeper('ZooKeeper', '#1');
  const keeper2 = new ZooKeeper('ZooKeeper', '#2');

  const vet1 = new Veterinarian('Veterinarian', '#1');
  const vet2 = new Veterinarian('Veterinarian', '#2');

  const employees = [keeper1, keeper2, vet1, vet2];

  for (let empIndex = 0; empIndex < employees.length; empIndex++) {
    const employee = employees[empIndex];

    for (let animalIndex = 0; animalIndex < animals.length; animalIndex++) {
      employee.addAnimalExperience(animals[animalIndex]);
    }
  }
  const zoos = zooApp.getZoos();
  for (let zooIndex = 0; zooIndex < zoos.length; zooIndex++) {
    const zoo = zoos[zooIndex];
    for (let encIndex = 0; encIndex < animals.length; encIndex++)
      zoo.addEnclosure(new Enclosure('Enclosure ' + (encIndex + 1), 1000));

    for (let animalIndex = 0; animalIndex < animals.length; animalIndex++)
      zoo
        .findAvailableEnclosure(animals[animalIndex])
        .addAnimal(animals[animalIndex]);

    for (let empIndex = 0; empIndex < employees.length; empIndex++) {
      const employee = employees[empIndex];
      zoo.hireEmployee(employee);
    }

    zoo.feedAnimals();
    zoo.healAnimals();
  }

  const logs = [
    'New zoo created on location Zoo 1',
    'New zoo created on location Zoo 2',
    'New animal created with id 1',
    'New animal created with id 2',
    'New animal created with id 3',
    'New animal created with id 4',
    'New animal created with id 5',
    'New animal created with id 6',
    'New animal created with id 7',
    'New ZooKeeper created ZooKeeper #1',
    'New ZooKeeper created ZooKeeper #2',
    'New Veterinarian created Veterinarian #1',
    'New Veterinarian created Veterinarian #2',
    'New enclosure added with nameEnclosure 1',
    'New enclosure added with nameEnclosure 2',
    'New enclosure added with nameEnclosure 3',
    'New enclosure added with nameEnclosure 4',
    'New enclosure added with nameEnclosure 5',
    'New enclosure added with nameEnclosure 6',
    'New enclosure added with nameEnclosure 7',
    'Animal with id 1 added to enclosure Enclosure 1',
    'Animal with id 2 added to enclosure Enclosure 2',
    'Animal with id 3 added to enclosure Enclosure 3',
    'Animal with id 4 added to enclosure Enclosure 4',
    'Animal with id 5 added to enclosure Enclosure 5',
    'Animal with id 6 added to enclosure Enclosure 6',
    'Animal with id 7 added to enclosure Enclosure 1',
    'New employee hired with name#1',
    'New employee hired with name#2',
    'New employee hired with name#1',
    'New employee hired with name#2',
    'Animal 1 fed by #1',
    'Animal 7 fed by #2',
    'Animal 2 fed by #1',
    'Animal 3 fed by #2',
    'Animal 4 fed by #1',
    'Animal 5 fed by #2',
    'Animal 6 fed by #1',
    'Animal 1 healed by #1',
    'Animal 7 healed by #2',
    'Animal 2 healed by #1',
    'Animal 3 healed by #2',
    'Animal 4 healed by #1',
    'Animal 5 healed by #2',
    'Animal 6 healed by #1',
    'New enclosure added with nameEnclosure 1',
    'New enclosure added with nameEnclosure 2',
    'New enclosure added with nameEnclosure 3',
    'New enclosure added with nameEnclosure 4',
    'New enclosure added with nameEnclosure 5',
    'New enclosure added with nameEnclosure 6',
    'New enclosure added with nameEnclosure 7',
    'Animal with id 1 added to enclosure Enclosure 1',
    'Animal with id 2 added to enclosure Enclosure 2',
    'Animal with id 3 added to enclosure Enclosure 3',
    'Animal with id 4 added to enclosure Enclosure 4',
    'Animal with id 5 added to enclosure Enclosure 5',
    'Animal with id 6 added to enclosure Enclosure 6',
    'Animal with id 7 added to enclosure Enclosure 1',
    'New employee hired with name#1',
    'New employee hired with name#2',
    'New employee hired with name#1',
    'New employee hired with name#2',
    'Animal 1 fed by #1',
    'Animal 7 fed by #2',
    'Animal 2 fed by #1',
    'Animal 3 fed by #2',
    'Animal 4 fed by #1',
    'Animal 5 fed by #2',
    'Animal 6 fed by #1',
  ];
  for (let log in logs) {
    expect(Logger.logs).toContain(logs[log]);
  }
});
