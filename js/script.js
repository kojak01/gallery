{
  const playGame = function(playerInput){
    clearMessages();
    const getMoveName = function(argMoveId){
      if(argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2){
        return 'papier';
      } else {
        return 'nożyce';
      }
    }

    // Computer Moves 

    const randomNumber = Math.floor(Math.random() * 3 + 1),
    computerMove = getMoveName(randomNumber);
      console.log('Wylosowana liczba to: ' + randomNumber);
      console.log('Mój ruch to: ' + computerMove);
      console.log('player wpisał ' + playerInput);

    const playerMove = getMoveName(playerInput);
    console.log('Twój ruch to: ' + playerMove);

    // Score Game
    const displayResult = function(argComputerMove, argPlayerMove){
        console.log('function move');
      if((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
        printMessage('Wygrywasz!')
      } else if(argComputerMove == argPlayerMove) {
        printMessage('Remis!')
      } else if(argPlayerMove == 'nieznany ruch'){
        printMessage('podaj liczbę od 1 do 3');
      } else {
        printMessage('Przegrywasz!');
      }
      }
    displayResult(computerMove, playerMove);
  }

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}