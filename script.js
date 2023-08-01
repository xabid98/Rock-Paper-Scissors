 const getComputerChoice=()=>{
    
 let arr=["rock","paper","scissors"]

 return arr[Math.floor(Math.random()*arr.length)]
 }

 const rock = document.getElementById('rock')
 const paper = document.getElementById('paper')
 const scissor = document.getElementById('scissor')
 const results = document.getElementById('results')
 


 const game=()=>{
  
    let player=0;
    let computer=0;
    let playerSelection
    let result
    rock.addEventListener('click', () => {
        pSelection='rock'

        playRound()
    })
    paper.addEventListener('click', () => {
        pSelection='paper'

        playRound()
    })

    scissor.addEventListener('click', () => {
        pSelection='scissors'

        playRound()
    })



    const playRound=(playerSelection, computerSelection)=>{
        
        playerSelection=pSelection
        computerSelection=getComputerChoice()
        console.log(playerSelection)
        console.log(computerSelection)



         if (playerSelection==="rock"||playerSelection==="paper"||playerSelection==="scissors") {
        
         if(playerSelection==="rock"){
      
             if(computerSelection==="rock") result=`You have tied! Rock equals Rock. Computer ${computer} - YOU ${player}`
      
             else if(computerSelection==="paper"){
                 computer++
                  result= `You Lose! Paper beats Rock. Computer ${computer} - YOU ${player}`
             }
             else if(computerSelection==="scissors"){
                 player++  
                 result= `You Win! Rock beats scissors. Computer ${computer} - YOU ${player}`
             }
            }
         
         else if(playerSelection==="paper"){
      
             if(computerSelection==="paper") result= `You have tied! Paper equals paper. Computer ${computer} - YOU ${player}`
             else if(computerSelection==="scissors"){
                 computer++
                 result= `You Lose! Scissors beats paper. Computer ${computer} - YOU ${player}`
             }
             else if(computerSelection==="rock"){
                 player++  
                 result= `You Win! Paper beats rock. Computer ${computer} - YOU ${player}`
             
         }
        }
         else if(playerSelection==="scissors"){
             if(computerSelection==="scissors") result= `You have tied! Scissors equals scissors. Computer ${computer} - YOU ${player}`
             else if(computerSelection==="rock"){
                 computer++
                 result= `You Lose! Rock beats scissors. Computer ${computer} - YOU ${player}`
             }
             else if(computerSelection==="paper"){
                 player++  
                 result= `You Win! Scissors beats paper. Computer ${computer} - YOU ${player}`
             }
         }
         console.log(result)
         let p = document.createElement("p");
          results.appendChild( p )
          results.textContent=result
         if(player===5) {
            p.remove()
            let f = document.createElement("p");
            results.appendChild( f )
            results.textContent=`You win ${player}-${computer} `
            player=0
            computer=0
         }
         else if (computer===5){
            p.remove()
            let f = document.createElement("p");
            results.appendChild( f )
            results.textContent=`You lose ${computer}-${player} `
            player=0
            computer=0
         } 
          
    
    
    //   for (let i = 0; i < 5; i++) {
    //       playRound()
    // }
    

}
}
}
 game()