var numSquares=6;
var colors=[];
var pickedColor="";

var squares =document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var mes=document.getElementById('message');
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modButtons=document.querySelectorAll(".mode");

init();

function init(){
	setSquares();
	modButton();
	reset();
};

function setSquares(){
	for(var i=0;i<squares.length;i++){
		squares[i].addEventListener("click",function(){
			var clickedColor=this.style.backgroundColor;
			if(clickedColor===pickedColor){
				resetButton.textContent="Play Again?";
				mes.textContent="Correct";
				changeColor(pickedColor);
				h1.style.backgroundColor=pickedColor;
				// this.textContent="Play Again?";
			}

			else{
				this.style.backgroundColor="#232323";
				mes.textContent="Try again!";
			}
		})
	}
}

function modButton(){
	for(var i=0;i<modButtons.length;i++){
		modButtons[i].addEventListener("click",function(){
			modButtons[0].classList.remove("selected");
			modButtons[1].classList.remove("selected");
			this.classList.add("selected")
			this.textContent==="Easy"?numSquares=3:numSquares=6;
			reset();
		});
	}
}

function reset() {
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New colors";
	mes.textContent="";
	for(var i=0;i<squares.length;i++)
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else
			squares[i].style.display="none";
	h1.style.backgroundColor="steelblue";
}


resetButton.addEventListener("click",function(){
	reset();
});



function changeColor(color) {
	for(var i=0;i<colors.length;i++)
		squares[i].style.backgroundColor=color;
	h1.style.backgroundColor=color;
};

function pickColor() {
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
};

function generateRandomColors(num) {
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
};

function randomColor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r+", " + g+", " + b+")";	
};