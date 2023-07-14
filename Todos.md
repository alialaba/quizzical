- two screens (start & questions). style polish
- access api from OTDB Api https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple
- tally correct answers after check answer is clicked.


### Some hints
- use a library to decode Html entities https://www.npmjs.com/package/html-entities#user-content-decodetext-options
- create a new array with all answers, ramdomly insert the correct answer into the array with the incorrect answers : how to shuffle items in an array at random or how to insert an item randomly.
- limit choice answer to 1 and style selected answer: 
  - 1 track the selected answer index inside each question object 
  - 2 use an html form radios input using the same name attribute to automatically only allow one selection 
  - 3 check how to style a radio input to look like a button.