let score = (JSON.parse(localStorage.getItem('score')));
        if(score === null) //(!score = (score === null))
        {
            score = score || {
                wins: 0,
                losses: 0,
                ties: 0
            };
        }
        updateScoreCard();
        function playGame(playerMove)
        {
            const computerMove = pickComputerMove();
            let result = '';

            if(playerMove === 'scissors')
            {
                if(computerMove === 'rock'){
                    result = 'You lose';
                }else if(computerMove === 'paper'){
                    result = 'You win';
                }else if(computerMove === 'scissors'){
                    result = 'Tie';
                }

            } else if(playerMove === 'paper') {
                if(computerMove === 'rock'){
                    result = 'You win';
                }else if(computerMove === 'paper'){
                    result = 'Tie';
                }else if(computerMove === 'scissors'){
                    result = 'You lose';
                }
                
            } else if(playerMove === 'rock'){
                if(computerMove === 'rock'){
                    result = 'Tie';
                }else if(computerMove === 'paper'){
                    result = 'You lose';
                }else if(computerMove === 'scissors'){
                    result = 'You win';
                }
            }
            if(result === 'You win'){
                score.wins++;
            } else if(result === 'You lose'){
                score.losses++;
            } else if(result === 'Tie'){
                score.ties++;
            }

            localStorage.setItem('score', JSON.stringify(score));    
            updateScoreCard();

            document.querySelector('.js-result').innerHTML= result;

            document.querySelector('.js-moves').innerHTML 
            = `You
            <img src="${playerMove}-emoji.png" 
            class="move-icon">
            <img src="${computerMove}-emoji.png"
            class="move-icon">
            Computer`;
            
        }
        function updateScoreCard(){
            document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }
        function pickComputerMove(){
            const ramdonNumber = Math.random();
            let computerMove = '';
            if(ramdonNumber >=0 && ramdonNumber<1/3){
                computerMove ='rock';
            }else if(ramdonNumber >=1/3 && ramdonNumber<2/3){
                computerMove='paper';
            }else if(ramdonNumber >=2/3 && ramdonNumber<1){
                computerMove='scissors';
            }
            return computerMove;
        }