'use strict';
console.clear();

//Task 1
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(weapon => weapon.name);
}

function getCountReliableWeapons(durability) {
  return weapons.filter(weapon => weapon.durability > durability).length;
}

function hasReliableWeapons(durability) {
  return weapons.some(weapon => weapon.durability > durability);
}

function getReliableWeaponsNames(durability) {
  return weapons
    .filter(weapon => weapon.durability > durability)
    .map(weapon => weapon.name);
}


function getTotalDamage() {
  const totalDamage = weapons.reduce((acc, weapon) => {
    return acc + weapon.attack
  }, 0);
  return totalDamage;
}

//Task 2

//2.1. preparation

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) { }
}

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  return arr1.length == arr2.length && arr1.every((element, index) => element === arr2[index]);
}

//2.2. wrapper

function memorize(fn, limit) {
  const memory = [];

  return (...args) => {
    const findSameItem = memory.find((element) => compareArrays(element.args, args));
    if (findSameItem) {
      return findSameItem.result;
    }

    memory.push({ args: args, result: fn(...args) });
    if (memory.length > limit) {
      memory.splice(0, 1)
    }

    return memory[memory.length - 1].result;
  }
}

