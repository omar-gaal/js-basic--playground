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

// fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
//   console.log(response),
// );

// Challenge:
// The JSON Placeholder API has /users endpoint,
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work.

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3

fetch("https://jsonplaceholder.typicode.com/users/3")
  .then((response) => {
    if (!response.ok) {
      throw new Error("oops!");
    }
    return response.json();
  })
  .then((data) => {
    const newData = {
      name: data.name,
      company: data.company.name,
    };
    console.log(newData);
  })
  .catch((error) => console.log(error));
