 const getComputerChoice=()=>{
    
 let arr=["rock","paper","scissors"]

 return arr[Math.floor(Math.random()*arr.length)]
 }


 const playRound=(playerSelection, computerSelection)=>{

     let sign = prompt("Rock, Paper or Scissors").toLowerCase();
    

     computerSelection=getComputerChoice()
     playerSelection=sign
     playerSelection.toLowerCase()

  
    return playRound()




 }

 console.log(playRound())