// States of a promise:
// pending
// fulfilled
// rejected

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(Error("Promise failed.")), 1000);
// });

// promise
//   .then((value) => console.log(value))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("done"));

fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
  console.log(response),
);
