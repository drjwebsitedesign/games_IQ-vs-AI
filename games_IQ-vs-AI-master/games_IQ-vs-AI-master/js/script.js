 // SHOW THE PLAYERS THE GUESSES THEY HAVE ALREADY TRIED.
        var computerGuess;
        var userGuessLog = [];
        var attempts = 0;
        var maxGuesses = 12;
        
        // SHOW THE PLAYERS THE GUESSES THEY HAVE ALREADY TRIED.
        function gameEnded() {
           document.getElementById("newGameButton").style.display="inline";
           document.getElementById('easyBtn').style.display = 'none';
           document.getElementById('hardBtn').style.display = 'none';    
           document.getElementById('geniusBtn').style.display = 'none';
           document.getElementById('inputBox').setAttribute('readonly', 'readonly');    
        }
        
        // SHOW THE PLAYERS THE GUESSES THEY HAVE ALREADY TRIED.
        function easyMode() {
            maxGuesses = 12;
            document.getElementById('easyBtn').className = 'activeButton';
            document.getElementById('hardBtn').className = '';
            document.getElementById('geniusBtn').className = '';
        }
        
        // SHOW THE PLAYERS THE GUESSES THEY HAVE ALREADY TRIED.
        function hardMode() {
            maxGuesses = 9;
            document.getElementById('hardBtn').className = 'activeButton';
            document.getElementById('easyBtn').className = '';
            document.getElementById('geniusBtn').className = '';
        }
        
        // SHOW THE PLAYERS THE GUESSES THEY HAVE ALREADY TRIED.
        function geniusMode() {
            maxGuesses = 6;
            document.getElementById('geniusBtn').className = 'activeButton';
            document.getElementById('easyBtn').className = '';
            document.getElementById('hardBtn').className = '';
        }
        
        // SHOW THE PLAYERS THE GUESSES THEY HAVE ALREADY TRIED.
        function newGame() {
            window.location.reload();
        }
        
        // SHOW THE PLAYERS THE GUESSES THEY HAVE ALREADY TRIED.
        function init() {
            computerGuess = Math.floor(Math.random() *100+1);
            //console.log(computerGuess);
        }
        document.getElementById("newGameButton").style.display = "none";
        
        //show each player the 'Human Guesses' they have made so far
        function compareGuess() {
        var userGuess = " " + document.getElementById("inputBox").value;
            //console.log(userGuess);
        userGuessLog.push(userGuess);
            //console.log(userGuessLog);
        document.getElementById("guessLog").innerHTML = userGuessLog;
            
        attempts++;
        document.getElementById("attempts").innerHTML = attempts;
        
        //tell each player if they guessed toooo high or toooo low.
        if(userGuessLog.length < maxGuesses) {
        if(userGuess > computerGuess) {
            document.getElementById("textOutput").innerHTML = "guess again ..... go Lower!";
            document.getElementById("inputBox").value = "";
        } else if(userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = "guess again ..... go Higher!";
            document.getElementById("inputBox").value = "";
        } else {
            document.getElementById("textOutput").innerHTML = "YEA! You WON in "+attempts+" Guesses!";
            document.getElementById("container").style.backgroundColor = "green";
            gameEnded();            
        } 
            //tell each player if they Won or Lost the game.
        } else { 
          if(userGuess > computerGuess) {
              document.getElementById('textOutput').innerHTML = 'Sorry But You Lose!' + ' The number was ' + computerGuess;
              document.getElementById("container").style.backgroundColor = "#000";
              gameEnded();              
        } else if (userGuess < computerGuess) {
            document.getElementById('textOutput').innerHTML = 'Sorry But You Lose!' + ' The number was ' + computerGuess;
            document.getElementById("container").style.backgroundColor = "#000";
            gameEnded();
        } else {
            document.getElementById('textOutput').innerHTML = "YEA! You WON in "+attempts+" Guesses!";;
            document.getElementById("container").style.backgroundColor = "green";
            gameEnded();
        }
      }    
    }