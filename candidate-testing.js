const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

let questions = ['Who was the first American Woman in space? ','True or False: 5 kilometer == 5000 meters? ','(5+3)/2*10 = ? ','Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ', 'What is the minimum crew size for the ISS? '];

let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];

let candidateAnswers = [];
let grade1 = 0;

function askForName() {
 /* // TODO 1.1b: Ask for candidate's name //*/
    candidateName = input.question("What is your name? ");
    

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
for (let i = 0; i < questions.length; i++){
  candidateAnswers.push(input.question(questions[i]));
  console.log(`Your Answer: ${candidateAnswers[i]}\n Correct Answer: ${correctAnswers[i]}`)
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade = 0;
  for (let i = 0;i<candidateAnswers.length; i++){
    if (candidateAnswers[i].toUpperCase == correctAnswers[i].toUpperCase) grade1++;
      else ;
  }
  console.log((grade/5)*100);
  return grade;
}

function runProgram() {
  askForName();
//   // TODO 1.1c: Ask for candidate's name //
console.log("Welcome to the quiz " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);

if (grade1 >= 4) {
  console.log(`>>> Overall Score: ${((grade1/5)*100)}% (${grade1} of 5 responses correct) <<<`);
  console.log(">>> Status: Passed! <<<");
}
else {
  console.log(`>>> Overall Score: ${((grade1/5)*100)}% (${grade1} of 5 responses correct) <<<`);
  console.log(">>> Status: Failed <<<");
}
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};