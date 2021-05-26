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
  return new Promise(executor);
};
const orderPromise = orderSunglasses();
console.log(orderSunglasses); // [Function: orderSunglasses] ; logs the function itself
console.log(orderPromise); // Promise { "Sunglasses order processed!" } ; logs the actual promise

// create a new promise with a reject and resolve logic
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < 0.5) {
    resolve("Yay!");
  } else {
    reject("Ohhhh nooooo!");
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
const handleFailure = (rejectedReason) => {
  console.log(rejectedReason);
};

prom.then(handleSuccess, handleFailure);

/* 
If no appropriate handler is provided, then() method will return a promise the same settled value as the promsie it was called on.
This allows us to separate our concerns of success and failure by chaining promises;
*/

let promiseWithCatch = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < 0.5) {
    resolve("Yay!");
  } else {
    reject("Ohhhh nooooo!");
  }
});

const successHandler = (resolvedValue) => {
  console.log(resolvedValue);
};
const failureHandler = (rejectedReason) => {
  console.log(rejectedReason);
};

promiseWithCatch.then(successHandler).catch(failureHandler);
