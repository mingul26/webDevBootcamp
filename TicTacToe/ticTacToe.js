var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");

var comp=false;
var arr=[0,1,2,3,4,5,6,7,8];

init();

function init(){
	reset();
}
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click",function(){
		if(arr.length){
			this.style.backgroundColor="rgb(239, 18, 18)";
			var index=arr.indexOf(Number(this.id-1));
			newArray(index);
			newSquare();
		}
		else {
			resetButton.textContent="Play Again?";
		}
	});

};

resetButton.addEventListener("click", function(){
	reset();
	this.textContent="Reset Board!";
});

function reset() {
	comp=false;
	arr=[0,1,2,3,4,5,6,7,8];
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor="#fff";
	};
};

function newArray(obj){
	var index=obj;
	arr.splice(index,1);
};

function newSquare(){	
	var nextElement=Math.floor(Math.random()*arr.length);
	var index=arr[nextElement];
	arr.splice(nextElement,1);
	squares[index].style.backgroundColor="rgb(92, 255, 0)";
};

