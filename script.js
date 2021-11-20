function computerPlay(){
    let items=['rock','paper','scissors']
    let rand = Math.floor(Math.random()*3)
    return items[rand]
}

function playerSelection(){
    let playerChoose='';
    while(playerChoose!=="rock" && playerChoose!=="paper" && playerChoose!=="scissors"){
    playerChoose = prompt("Please choose rock/paper/scissors?")
    playerChoose = playerChoose.toLowerCase()
}
    return playerChoose;
}

function playRound(computerChoose,playerChoose){

    console.log("Computer choose: " + computerChoose);
    console.log("Your choose: " + playerChoose)

    if(computerChoose === playerChoose){
        return 0
    }

    if((computerChoose === 'rock' && playerChoose === 'scissors') || 
    (computerChoose === 'paper' && playerChoose === 'rock') || 
    (computerChoose === 'scissors' && playerChoose === 'paper')){
        return -1
    }
    return 1
}

function logRound(computerChoose, playerChoose){
    let roundResult = playRound(computerChoose,playerChoose);
    if(roundResult === 0){
        console.log(`Draw! Both players chose ${playerChoose}`)
        return 0
    }
    if(roundResult === 1){
        console.log(`You won! ${playerChoose} beats ${computerChoose}`);
        return 1
    }
    if(roundResult === -1){
        console.log(`You lost! ${computerChoose} beats ${playerChoose}`);
        return -1
    }
}

function whoWon(player,computer){
    if(player === computer){
        return 0
    }
    if (player > computer){
        return 1
    }
        return -1;
}

function game(){
    let computer = 0;
    let player = 0;
    let computerChoose
    let playerChoose
    for(let i=0; i<5; i++){
        console.log(`=======Round ${i+1}========`);
        computerChoose = computerPlay();
        playerChoose = playerSelection();
        let roundResult = logRound(computerChoose,playerChoose);
        if(roundResult === 1){
            player++;
        }
        if(roundResult === -1){
            computer++;
        }
        console.log("Total score:")
        console.log(`Player - Computer ${player}:${computer}`)
    }

    let winner = whoWon(player,computer);
    console.log("========GAME RESULT==========")
    if(winner === 0){      
        console.log(`Draw! ${player}:${computer}`)
    }
    if(winner === 1){      
        console.log(`You WON the game! ${player}:${computer}`)
    }
    if (winner === -1){    
            console.log(`You LOST the game! ${player}:${computer}`)
    }
    
}

game();