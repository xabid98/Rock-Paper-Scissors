 const getComputerChoice=()=>{
    
 let arr=["rock","paper","scissors"]

 return arr[Math.floor(Math.random()*arr.length)]
 }


 const playRound=(playerSelection, computerSelection)=>{

     let sign = prompt("Rock, Paper or Scissors").toLowerCase();
    

     computerSelection=getComputerChoice()
     playerSelection=sign
     playerSelection.toLowerCase()

    if (playerSelection==="rock"||playerSelection==="paper"||playerSelection==="scissors") {
        
        if(playerSelection==="rock"){
            
            if(computerSelection==="rock")return 'You have tied! Rock equals Rock'
            else if(computerSelection==="paper") return "You Lose! Paper beats Rock"
            else if(computerSelection==="scissors") return "You Win! Rock beats scissors"

        }
        else if(playerSelection==="paper"){
            
            if(computerSelection==="paper")return 'You have tied! Paper equals paper'
            else if(computerSelection==="scissors") return "You Lose! Scissors beats paper"
            else if(computerSelection==="rock") return "You Win! Paper beats rock"

        }
        else if(playerSelection==="scissors"){

            if(computerSelection==="scissors")return 'You have tied! Scissors equals scissors'
            else if(computerSelection==="rock") return "You Lose! Rock beats scissors"
            else if(computerSelection==="paper") return "You Win! Scissors beats paper"
            

        }
    
    
    
    }

    else { return playRound()}




 }

 console.log(playRound())