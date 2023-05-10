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
            
            if(computerSelection==="rock") console.log(`You have tied! Rock equals Rock. Computer ${computer} - YOU ${player}`)
            
            else if(computerSelection==="paper"){
                computer++
                 console.log( `You Lose! Paper beats Rock. Computer ${computer} - YOU ${player}`)
            }
            else if(computerSelection==="scissors"){
                player++  
                console.log( `You Win! Rock beats scissors. Computer ${computer} - YOU ${player}`)
            }
        }

        else if(playerSelection==="paper"){
            
            if(computerSelection==="paper") console.log(`You have tied! Paper equals paper. Computer ${computer} - YOU ${player}`)
            else if(computerSelection==="scissors"){
                computer++
                console.log(`You Lose! Scissors beats paper. Computer ${computer} - YOU ${player}`)
            }
            else if(computerSelection==="rock"){
                player++  
               console.log(`You Win! Paper beats rock. Computer ${computer} - YOU ${player}`)
            }

        }
        else if(playerSelection==="scissors"){

            if(computerSelection==="scissors") console.log(`You have tied! Scissors equals scissors. Computer ${computer} - YOU ${player}`)
            else if(computerSelection==="rock"){
                computer++
                 console.log(`You Lose! Rock beats scissors. Computer ${computer} - YOU ${player}`)
            }
            else if(computerSelection==="paper"){
                player++  
                console.log(`You Win! Scissors beats paper. Computer ${computer} - YOU ${player}`)
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