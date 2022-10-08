function getMoveName(argMoveId){
  if(argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2){
    return 'papier'
  } else {
    return 'nożyce'
  }
}

// Computer Moves 

let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
  computerMove = 'papier';
} else if(randomNumber == 3){
  computerMove = 'nożyce';
}
*/
console.log('Mój ruch to: ' + computerMove);

// Player Moves

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2 papier, 3 nożyce');
let playerMove = getMoveName(playerInput)
/*
if(playerInput == 1){
  playerMove = 'kamień';
} else if(playerInput == 2){
  playerMove = 'papier';
} else if(playerInput == 3){
  playerMove = 'nożyce'
}
*/
console.log('Twój ruch to: ' + playerMove);

// Score Game

if((computerMove == 'kamień' && playerMove == 'papier') ||
(computerMove == 'papier' && playerMove == 'nożyce') ||
(computerMove == 'nożyce' && playerMove == 'kamień')) {
  console.log('Wygrywasz!')
} else if(computerMove == playerMove) {
  console.log('Remis!')
} else if(playerMove == 'nieznany ruch'){
  console.log('podaj liczbę od 1 do 3');
} else {
  console.log('Przegrywasz!');
}

