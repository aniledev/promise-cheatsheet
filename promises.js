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

// here is an example of chaining promises
firstPromiseFunction()
  .then((firstResolvedVal) => {
    return secondPromiseFunction(firstResolvedVal);
  })
  .then((secondResolvedVal) => {
    console.log(secondResolvedVal);
  });

/* 
Promise.all() allows us to use concurrency, which is essentially multiple async functions happening together.
Promise.all() accepts an array of promises at its argument and returns a single promise.
If every promise in the argument array resolves, the promise returned will resolve with an array of all the resolves values. 
If a single promise in the array rejects, the resolve value will be the rejection reason. If
*/

let myPromises = Promise.all([
  returnsPromiseOne(),
  returnsPromiseTwo(),
  returnsPromiseThree(),
]);

myPromises // promise resolves to an array of values
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });

// promises using async/await
async function asynchronousFunction() {
  let firstSentence = await promiseOne();
  let secondSentence = await promiseTwo();
  console.log(firstSentence, secondSentence);
}
