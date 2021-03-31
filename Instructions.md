# Entrance Exam: Science Questions

Write three functions to help analyze submissions for a science quiz. Each student in the class submitted their answers to questions for the quiz. Each submission is represented as an object with the following keys:

* `question` - the question that was asked, represented as a string.
* `response` - the text of the student's response, represented as a string.
* `isCorrect` - whether or not the response was graded as correct, represented as a boolean.
* `isEssayQuestion` - whether or not the response is an essay question, represented as a boolean.

Data for the entire month is stored in an array. For example:

```js
let submissions = [
  {
    question: 'What is the phase where chromosomes line up in mitosis?',
    response: 'Metaphase',
    isCorrect: true,
    isEssayQuestion: false
  },
  {
    question: 'What anatomical structure connects the stomach to the mouth?',
    response: 'Esophagus',
    isCorrect: true,
    isEssayQuestion: false
  },
  {
    question: 'What are lysosomes?',
    response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
    isCorrect: true,
    isEssayQuestion: true
  },
  {
    question: 'True or False: Prostaglandins can only constrict blood vessels.',
    response: 'True',
    isCorrect: false,
    isEssayQuestion: false
  }
];
```

While you can use the data above as an example, assume there might be more submissions and that the submissions may differ. You can assume that every submission is an object with the correct keys, with each value having a matching type.

## How to Complete the Prompts

Read each prompt below to learn more about the functions you need to write. Write all of your code in the `index.js` file. Run the tests to get feedback on your solution.

Do not delete the existing code you have been given. The tests depend on the code that's already in `index.js`.

### Prompt 1 : countCorrectQuestions

Write a function named `countCorrectQuestions` that takes one argument:

* an array of submissions

It should return how many of those submissions are marked as correct. For this question, correct means that the `isCorrect` property is `true`.

For example, using the sample submissions array:

```js
countCorrectQuestions(submissions); //-> 3
```

If none of the submissions are correct, return `0`.

### Prompt 2 : filterQuestionsByType

Write a function named `filterQuestionsByType` that takes two arguments:

* an array of submissions
* a boolean value, representing whether the function should return essay questions or not

It should return an array of all of the submissions of the appropriate type.

If the second argument is `true`, then return the objects that have `true` for the `isEssayQuestion` property. Alternatively, if the second argument is `false`, it should return the submissions that have `false` for `isEssayQuestion`.

For example (using the sample data above):

```js
const essayQuestions = true;
filterQuestionsByType(submissions, essayQuestions); /* ->
  [
    {
    question: 'What are lysosomes?',
    response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
    isCorrect: true,
    isEssayQuestion: true
  }
  ]
*/
```

If the `essayQuestions` variable was `false` instead, the function would return an array with the other three submissions.

### Prompt 3 : checkForPlagiarism

Write a function named `checkForPlagiarism` that takes two arguments:

* an array of all of the submissions
* a string of text to check the responses against

For each submission in the submissions array, check if the `response` value includes the given string. 

If any of the submissions include the text, the function should return `true`. If none of the submissions include the sample text, return `false`.

For example, in this example, the function should return `true` because the string `'spherical vesicles that contain hydrolytic enzymes'` is included in the third submission.

```js
checkForPlagiarism(submissions, 'spherical vesicles that contain hydrolytic enzymes'); //-> true
```

In this example, the string `'this string does not appear in the submissions'` does not appear in any of the submissions, so the function returns `false`.

```js
checkForPlagiarism(submissions, 'this string does not appear in the submissions'); //-> false
```
  
> **Hint:** You might use the String [.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) method for this question.