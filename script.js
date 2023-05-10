 const getComputerChoice=()=>{
    
 let arr=["rock","paper","scissors"]

 return arr[Math.floor(Math.random()*arr.length)]
 }

 const game=()=>{
  
    let player=0;
    let computer=0;
    const playRound=(playerSelection, computerSelection)=>{
        
        
        
        let sign = prompt("Rock, Paper or Scissors").toLowerCase();
        

         computerSelection=getComputerChoice()
         playerSelection=sign
         playerSelection.toLowerCase()

        if (playerSelection==="rock"||playerSelection==="paper"||playerSelection==="scissors") {
        
        if(playerSelection==="rock"){
            
            if(computerSelection==="rock") 'You have tied! Rock equals Rock'
            
            else if(computerSelection==="paper"){
                computer++
                // console( "You Lose! Paper beats Rock")
            }
            else if(computerSelection==="scissors"){
                player++  
                // console( "You Win! Rock beats scissors")
            }
        }

        else if(playerSelection==="paper"){
            
            if(computerSelection==="paper") 'You have tied! Paper equals paper'
            else if(computerSelection==="scissors"){
                computer++
                // console("You Lose! Scissors beats paper")
            }
            else if(computerSelection==="rock"){
                player++  
                // console("You Win! Paper beats rock")
            }

        }
        else if(playerSelection==="scissors"){

            if(computerSelection==="scissors") 'You have tied! Scissors equals scissors'
            else if(computerSelection==="rock"){
                computer++
                // console("You Lose! Rock beats scissors")
            }
            else if(computerSelection==="paper"){
                player++  
                // console("You Win! Scissors beats paper")
            }
        }
        }

        else return playRound()

    }
    for (let i = 0; i < 5; i++) {
        playRound()
   }
    if(player>computer) return `You win ${player}-${computer} `
    else if (player<computer) return `You lose ${computer}-${player} `
    else{return `Equal ${computer}-${player} `}

}
 console.log(game())