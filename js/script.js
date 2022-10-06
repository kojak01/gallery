let randomNumber = Math.floor(Math.random() * 3 + 1); 
console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce'  
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + argPlayerMove);


function displayResult(argComputerMove, argPlayerMove){
    if((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
    (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
    (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
    printMessage('Wygrywasz!')
    } else if(argComputerMove == argPlayerMove){
    printMessage('Remis');
    } else if (argPlayerMove == 'nieznany ruch'){
    printMessage('podaj liczbę od 1 do 3');
    } else{
        printMessage('Nieznany ruch');
    }

}