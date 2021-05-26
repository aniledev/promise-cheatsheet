// constructing a promise using an executor function
const executorFunction = (resolve, reject) => {
  if (someCondition) {
    resolve("I resolved!");
  } else {
    reject("I rejected. Oh no.");
  }
};
const createPromise = new Promise(executorFunction);
