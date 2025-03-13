(function () {
    'use strict';
    console.log('reading js')


// JS FOR INFO HOVER
   var info = document.querySelector("#rulesButton");
   var rules = document.querySelector("#rules")
   info.addEventListener('mouseover', function(){
    rules.style.display = "block";
        rules.innerHTML = `<p>There are two players.</p> 
        <p>The player whose turn it is rolls the dice.</p>
        <p>The total of the roll is added to the current player's score, unless either die comes up as a "one".</p>
        <p>If this happens, this player's turn is over, and it is the other player’s turn.</p>
        <p>After each roll, the current player can either roll again, (assuming a "one" was not rolled) or if the current player feels that luck is running thin, they can pass to the other player.</p> 
        <p>The first player to get 30 points or higher wins.</p> 
        <p>If you roll two "ones" (snake eyes), your current score gets zeroed out.</p>`
   });
   info.addEventListener('mouseout', function(){
    rules.style.display = "none";
    rules.innerHTML = ``;
   
    });




// GAME FUNCTION

    const startButton = document.querySelector('#start');
    // const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const birdScore = document.querySelector('#birdScore');
    const mouseScore = document.querySelector('#mouseScore');
    const actionArea = document.querySelector('#actions');

    const gameData = {
        dice: ['Die1.png', 'Die2.png', 'Die3.png', 
               'Die4.png', 'Die5.png', 'Die6.png'],
        players: ['Bird', 'Mouse'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startButton.addEventListener('click', function(){
        gameData.index = Math.round(Math.random());
        document.querySelector('#quit').addEventListener('click', function(){
            location.reload();
        });
        startButton.style.display = 'none';
        // set up the turn
        setUpTurn();

    })
    
    function setUpTurn() {
        game.innerHTML = `<p class="bText">Roll the dice for ${gameData.players[gameData.index]
        }</p>`;
        actionArea.innerHTML = '<button id="roll">Roll</button>';
        document.querySelector('#roll').addEventListener('click', function(){
            throwDice();
        })
    }

    

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero. 
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        // console.log(gameData.roll1);
        // console.log(gameData.roll2);
        game.innerHTML = `<p class="bText">Roll the dice for ${gameData.players[gameData.index]
        }`;
        game.innerHTML += `<img class="die" src="images/${gameData.dice[gameData.roll1-1]}"> <img class="die" src="images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData.rollSum);

        if (gameData.rollSum === 2) {
            game.innerHTML += '<p>Snake Eyes!</p>';
            gameData.score[gameData.index] = 0;
            // switch player using ternary operator
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            // wait 2 seconds
            setTimeout(setUpTurn, 2000);
            showCurrentScore();
        } 

   
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {

            console.log('one of the dice rolled is a 1');
            // switch player using using ternary operator
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p class="bText">Sorry, one of the rolls was a one.</p><p>Switching to ${gameData.players[gameData.index]}</p>`;

            setTimeout(setUpTurn, 2000);

        }

        // if neither die is a 1
        else {
            console.log ('neither was a 1, game continues');
            // update score
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollAgain">Roll</button> or <button id="pass">Pass</button>';

            document.querySelector('#rollAgain').addEventListener('click', function(){
                throwDice();
            });

            document.querySelector('#pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
            checkWinningCondition();
        };
    };

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {

            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = '';
            document.querySelector('#quit').innerHTML = 'replay';

        } else {
        showCurrentScore();
        };  
    };

    function showCurrentScore() {
        birdScore.innerHTML = `${gameData.score[0]}`;
        mouseScore.innerHTML = `${gameData.score[1]}`;
    }

})();