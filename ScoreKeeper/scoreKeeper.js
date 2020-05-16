var p1b = document.querySelector("#p1")
var p2b = document.querySelector("#p2")
var res = document.querySelector("#res")
var p1h = document.querySelector("#p1h")
var p2h = document.querySelector("#p2h")
var max = document.querySelector("p span")
var numInput = document.querySelector("input");

var gameOver = false;
var maxScore = 5;
var p1s = 0;

p1b.addEventListener("click",function(){
	if(!gameOver){
		p1s++;
		if(p1s===maxScore){
			p1h.classList.add("winner");
			gameOver = true;
		}
		p1h.textContent = p1s;
	}
});

var p2s=0;
p2b.addEventListener("click",function(){
	if(!gameOver){
		p2s++;
		if(p2s===maxScore){
			p2h.classList.add("winner");		
			gameOver = true;
		}
		p2h.textContent = p2s;
	}
});

res.addEventListener("click",reset);

numInput.addEventListener("change",function(){
	max.textContent = this.value;
	maxScore = Number(this.value);
	reset();
});

function reset(){
	p1s = 0;
	p2s = 0;
	p1h.textContent = p1s;
	p2h.textContent = p2s;
	p1h.classList.remove("winner");
	p2h.classList.remove("winner");
	gameOver = false;
}