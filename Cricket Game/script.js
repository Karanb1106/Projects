
let scoreStr = localStorage.getItem('Score');
let score;  // Global Scope
resetScore(scoreStr);


function resetScore(scoreStr){
  score = scoreStr ? JSON.parse(scoreStr) : {  // let score --> Locally Scope
    win: 0,
    lost: 0,
    tie: 0,
};

  score.displayScore = function(){
    return `SCORE :  Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
  }; 
  showResult();
}

function generateComputerChoice() {
  // this will generate random number between 0 ans 3
  let randomNumber = Math.random() * 3;
  // let computerChoiceMsg;
  if (randomNumber > 0 && randomNumber <= 1) {
    return "Bat";
    //console.log('Computer Choice is Bat');
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Ball";
    //console.log('Computer Choice is Ball');
  } else {
    return "Stump";
    //console.log('Computer Choice is Stump');
  }
}

function getResult(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Bat") {
      score.tie++;
      return `It's a Tie.`;
    } else if (computerMove === "Ball") {
      score.win++;
      return "User Won.";
    } else if (computerMove === "Stump") {
      score.lost++;
      return "Computer has Won.";
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Ball") {
      score.tie++;
      return `It's a Tie.`;
    } else if (computerMove === "Bat") {
      score.lost++;
      return "Computer has Won.";
    } else if (computerMove === "Stump") {
      score.win++;
      return "User Won.";
    }
  } else {
    if (computerMove === "Ball") {
      score.lost++;
      return "Computer has Won.";
    } else if (computerMove === "Bat") {
      score.win++;
      return `User Won.`;
    } else if (computerMove === "Stump") {
      score.tie++;
      return `It's a Tie.`;
    }
  }
}

function showResult(userMove, computerMove, resultMsg) {
  localStorage.setItem('Score', JSON.stringify(score));
  //console.log(score);
  document.querySelector('#user-move').innerText = 
    userMove ? `You have Chosen ${userMove}`: ' ';
  document.querySelector('#computer-move').innerText = computerMove  ? `Computer Choice is ${computerMove}` : ' ';
  document.querySelector('#result').innerText =  
  resultMsg || ' '; // undefined
  document.querySelector('#score').innerText =  score.displayScore();
}
