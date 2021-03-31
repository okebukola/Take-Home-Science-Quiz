// See Instructions.md for instructions

// This is example data you can use while working on your code.
const submissions = [
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

// Prompt 1 : countCorrectQuestions
function countCorrectQuestions(arr){
  let count = 0;
  arr.forEach(({isCorrect})=>isCorrect=== true?count++:null)
  return count
}
// Prompt 2 : filterQuestionsByType
function filterQuestionsByType(arr,bool){
  return  arr.filter(({isEssayQuestion})=> isEssayQuestion === bool)
}
// Prompt 3 : checkForPlagiarism
function checkForPlagiarism(arr=submissions,text){
  for (let i =0;i<arr.length;i++){
  if (arr[i].response.includes(text)){
    return true
  }
}
return false
}


//This is to run the tests. You can ignore it but don't delete it! 
require('./index.test.js'); (void 0);
