// constructing a promise using an executor function
/*
const executorFunction = (resolve, reject) => {
  if (someCondition) {
    resolve("I resolved!");
  } else {
    reject("I rejected. Oh no.");
  }
};
const createPromise = new Promise(executorFunction);
*/

// constructing a promise using an executor function and dummy data
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1324,
};

const executor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed!");
  } else {
    reject("That item is sold out.");
  }
};

const orderSunglasses = () => {
  return new Promise(executor); // this returns a new promise; not the resolved value of the promise
};
const orderPromise = orderSunglasses(); // this variable saves the resolved value of the promise
console.log(orderSunglasses); // [Function: orderSunglasses]
console.log(orderPromise); // Promise { "Sunglasses order processed!" }
