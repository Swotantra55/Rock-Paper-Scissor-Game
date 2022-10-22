var user_score=0;
var comp_score=0;
var result = "";
const result_element = document.getElementById('result_message');
const uscore = document.getElementById('user-score');
const cscore = document.getElementById('computer-score');


function compare(val) {
	var comp = Math.floor(Math.random()*3);

	if(val===0){
		switch(comp) {
			case 0: 
			result = "Draw.";
			break;
			case 1: 
			result = "Rock Vs Paper. Computer wins."
			comp_score+=1;
			break;
			case 2: 
			result = " Rock Vs Scissor. User wins."
			user_score+=1;
			break;
		}
	}
	if (val===1)
	{
		switch(comp) {
			case 0: 
			result = "Paper Vs Rock. User wins.";
			user_score+=1;
			break;
			case 1: 
			result = "Draw";
			break;
			case 2: 
			result = " Paper Vs Scissor. Computer wins.";
			comp_score+=1;
			break;
	}
}
   if(val ===2)
   {
   	switch(comp) {
			case 0: 
			result = "Scissor Vs Rock. Computer wins.";
			comp_score+=1;
			break;
			case 1: 
			result = "Scissor Vs Paper. User wins.";
			user_score+=1;
			break;
			case 2: 
			result = "Draw";
			break;
	}
   }
   result_element.innerHTML = result;
   /*console.log("user score: " +user_score);
   console.log("comp score : " + comp_score)*/
  uscore.innerHTML = user_score;
  cscore.innerHTML = comp_score;
}

const rock = document.getElementById("rock");
rock.addEventListener("click", function pass(){
 compare(0);
});
const paper = document.getElementById('paper');
paper.addEventListener("click", function pass(){
 compare(1);
});
const scissor = document.getElementById('scissor');
scissor.addEventListener("click", function pass(){
 compare(2);
});



