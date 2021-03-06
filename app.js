const t1Button = document.querySelector("#t1Button");
const t2Button = document.querySelector("#t2Button");
const t1Score = document.querySelector("#t1Score");
const t2Score = document.querySelector("#t2Score");
const reset = document.querySelector("#reset");
const playTo = document.querySelector("#playTo");
const t1Name = document.querySelector("#t1Name");
const t2Name = document.querySelector("#t2Name");
const t1Text = document.querySelector("#t1Text");
const t2Text = document.querySelector("#t2Text");
let winningScore = 7;
let score1 = 0;
let score2 = 0;
let isGameOver = false;



//Team 1 score
t1Button.addEventListener("click", function(){
   if(!isGameOver){
      score1 += 1;
      if(score1 === winningScore){
         isGameOver = true;
         t1Score.classList.add('winner');
         t2Score.classList.add('loser');
         t1Button.disabled = true;
         t2Button.disabled = true;
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
         t2Score.classList.add('winner');
         t1Score.classList.add('loser');
         t1Button.disabled = true;
         t2Button.disabled = true;
      }
   }
   t2Score.textContent = score2;
})

reset.addEventListener("click", resetToZero);

playTo.addEventListener("change", function(){
   resetToZero();
   winningScore = parseInt(this.value);  
})


function resetToZero(){
   isGameOver = false;
   score1 = 0;
   score2 = 0;
   t1Score.textContent = score1;
   t2Score.textContent = score2;
   t1Score.classList.remove('winner', 'loser');
   t2Score.classList.remove('winner', 'loser');
   t1Button.disabled = false;
   t2Button.disabled = false;
   t1Text.innerText = "Team 1";
   t2Text.innerText = "Team 2";
   t1Name.value = "";
   t2Name.value = "";
}


t1Name.addEventListener("input", function(){
   t1Text.innerText = t1Name.value;
})
t2Name.addEventListener("input", function(){
   t2Text.innerText = t2Name.value;
})