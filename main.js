var getUserChoice = function(userInput){
    userInput = prompt("Rock, paper or scissors? ")
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    } else {
     alert('Error not a word for this game :) !');
    }
  };
  
  
   var getComputerChoice = function (){
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return  'scissors';
      break;
    };
  }
 var determineWinner = function (userChoice, computerChoice){
    if(userChoice === computerChoice){
      return ' Muhahha it`s a draw !!!!';
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer won !!';
      } else {
        return 'Congratz, you won !!!'
      }
    }
      if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer won !!';
      } else {
        return 'Congratz, you won !!!'
      }
    }
      if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'Computer won !!';
      } else {
        return 'Congratz, you won !!!'
      }
    }
  }
  
  var playGame = function (){
    var userChoice = getUserChoice('paper');
    var computerChoice = getComputerChoice ();
    alert('Player selected: ' + userChoice + "\n"+ 'Computer selected: ' + computerChoice + "\n"+ determineWinner(userChoice, computerChoice) );
   
    
  };
   playGame();
  


   function button() {
    location.reload();
  }
  
  
  
  
  
  