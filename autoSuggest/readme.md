# Autosuggestion
Write a web page that allow the user to type on an input field and creates a list of possible words(Auto Suggestion).
The list of words comes from the back-end.

## Approach
- Create a text input
- Create an event listener that gets the string typed
- Use the string to send a request to the backend
- use the response to populate the auto-suggest list
- attach an event listener to the list items
- on clicking the list item, autofill the input field with the clicked word

## Optimization
- To reduce the number of requests being sent to the backend, debounce the requests sent to the backend

## Running the backend
- from the root folder of the js-cardio repo run the command `npm run dictionary`
- This is a node backend running on express js
- It uses a json list of words, in the server folder
