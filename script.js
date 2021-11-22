let computer = 0;
let player = 0;
//UI
const playerScore = document.querySelector('#player-score')
const computerScore = document.querySelector('#computer-score')
const buttons = document.querySelectorAll('.buttons button')
const roundContainer = document.querySelector('.round')

//Events
    buttons.forEach((button) => {
        button.addEventListener('click',() => {
            playRound(computerPlay(),button.id);
        })
    })

function toggleButtons(){ //Rock Paper Scissors button enabling/disabling
    
    buttons.forEach((button) => {
        button.disabled = !button.disabled
    })

}

function newGame(){//Start game function. Triggered if new game button clicked
   

    const startGame = document.querySelector('#start')
    startGame.addEventListener('click',() => { //new game button onClick listemer
        toggleButtons()
        computer = 0
        player = 0
        playerScore.textContent = player;
        computerScore.textContent = computer;       
        console.log(roundContainer.classList)
        roundContainer.classList.remove('round-active')
        console.log(roundContainer.classList)
    
        while(roundContainer.firstChild){
            console.log(roundContainer.removeChild(roundContainer.firstChild))
        }

       const divRound = document.createElement('div')
        divRound.classList.add('status-text')
        divRound.textContent = "Game started! Please choose your weapon!"
        roundContainer.appendChild(divRound)
    })
    }

    function computerPlay(){
        const items=['rock','paper','scissors']
        const rand = Math.floor(Math.random()*3)
        return items[rand]
    }

function playRound(computerChoose,playerChoose){

//UI: Round section fillin with round results
    const playerChooseImage = document.createElement('img')
    const computerChooseImage = document.createElement('img')
    const divRound = document.createElement('div')
    playerChooseImage.src = `assets/${playerChoose}.png`
    playerChooseImage.alt=`${playerChoose}`
    computerChooseImage.src = `assets/${computerChoose}.png`
    computerChooseImage.alt=`${computerChoose}`
    divRound.classList.add('status-text')
//UI: removing previous round container
    while(roundContainer.firstChild){
        roundContainer.removeChild(roundContainer.firstChild)
    }
//UI: adding round results to the page
    roundContainer.appendChild(playerChooseImage);
    roundContainer.appendChild(divRound);
    roundContainer.appendChild(computerChooseImage)
    roundContainer.classList.add('round-active')
  
//Calculating score and adding status text to the page
    if(computerChoose === playerChoose){
        divRound.textContent = `Draw!`
    }

    else if((computerChoose === 'rock' && playerChoose === 'scissors') || 
                (computerChoose === 'paper' && playerChoose === 'rock') || 
                (computerChoose === 'scissors' && playerChoose === 'paper')){
        divRound.textContent = 'You lost the round!'
        computerScore.textContent = ++computer;
    }
    else{
    divRound.textContent = 'You win the round!'
    playerScore.textContent = ++player;
    }

    endGameCheck(computer,player)
}

function endGameCheck(computer,player){//Stop the game if someone gets 5 ponts

    if(computer === 5){
        const divRound = document.querySelector('div.status-text')
        divRound.textContent = "You lost the game :("
        toggleButtons()
        addNewGame()
    }

    if(player === 5){
        const divRound = document.querySelector('div.status-text')
        divRound.textContent = "You win the game!"
        toggleButtons()
        addNewGame()
    }

}

function addNewGame(){ //Adding new game button
    const roundDiv = document.querySelector('.status-text')
    const newGameBtn = document.createElement('button');
    newGameBtn.id = "start";
    newGameBtn.textContent = "New game"
    roundDiv.appendChild(newGameBtn)
    newGame()
}

newGame()




