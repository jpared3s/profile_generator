const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];
const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's music do you listen too while working out? ",
  "Which sport is your absolute favourite to watch? ",
];

let idx = 0;
const profileSurvey = () => {
  if(idx < questions.length) {
    rl.question(questions[idx], (answer) => { 
      answers.push(answer)
      idx += 1
      profileSurvey();
    })
    //if its less than two then we will ask a question, if its not the output answer
  } else {
    console.log(`${answers[0]} loves to listen to ${answers[1]} while at the gym. He loves to watch ${answers[2]} in his spare time.`)
    rl.close();
    //output result
  }
};
profileSurvey();

