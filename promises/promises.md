# Promises

This is a javascript object that represents the eventual completion or failure of an asynchronous operation, and its resulting value.

## Syntax

`new Promise(/* executor */ fuction(resolve, reject) {...});`

- executor

  - Has the arguments resolve and reject
  - Executes some asynchronous work and calls resolve function to resolve the promise else it rejects if there was an error

- States

  - pending: Initial state that is neither fulfilled nor rejected
  - fulfilled: Operation completed successfully
  - rejected: Operation failed

- functions
  - then() : This will be executed when the request has been resolved
  - catch() : when we get an error.

# [Fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

Provides a Javascript interface for accessing and manipulating parts of HTTP pipeline as requests and responses

## Difference form jQuery.ajax()

1. it will not reject on HTTP error status (eg 404 and 500). Instead it resolves with the ok status set to false. Rejects only on network failure.
2. Won't send/receive cookies from server. To send cookies the credentials [init option](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) must be set.

## Request with all options

```js
postData(`http://example.com/answer`, { answer: 42 })
  .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error(error));

function postData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(response => response.json()); // parses response to JSON
}
```

# Project

[project reference](https://www.youtube.com/watch?v=chavThlNz3s&index=4&list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx)
To run this project you need to have a key on the [Open weather website](https://openweathermap.org/). But besides running it,
the core is in the code and in trying to understand why it works the way it does.

## fetch.js

This file tries to make a get request to the weather API using a fetch request

- The native fetch function was introduced in ES-6 as a wrapper for the earlier XHR requests.
- It returns a promise the can be accessed using the then() function and the errors can be caught using the catch() function
- several requests can be chained by returning the new request in the then() block of the prior function

## custom-promise.js

This file tries to make a call to our own build promise.

- Within the functions of the new Promise one should create the rules that evaluate and reject wrong requests.
- The response data can be passed to the resolve function

## async-await.js

This turns normal functions into functions that can execute asynchronius functions which return AsyncFunction object/Promise
