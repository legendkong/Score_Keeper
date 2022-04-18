const t1Button = document.querySelector("#t1Button");
const t2Button = document.querySelector("#t2Button");
const t1Score = document.querySelector("#t1Score");
const t2Score = document.querySelector("#t2Score");
let score1 = 0;
let score2 = 0;
let winningScore = 21;
let isGameOver = false;



//Team 1 score
t1Button.addEventListener("click", function(){
   if(!isGameOver){
      score1 += 1;
      if(score1 === winningScore){
         isGameOver = true;
      }
   }
   t1Score.textContent = score1;
})

//Team 2 score
t2Button.addEventListener("click", function(){
   if(!isGameOver){
      score2 += 1;
      if(score2 === winningScore){
         isGameOver = true;
      }
   }
   t2Score.textContent = score2;
})