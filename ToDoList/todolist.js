var add=document.querySelector("#toggle");
var input=document.querySelector("input");
var li=document.querySelectorAll("li");
var ul=document.querySelector("ul");
var trash=document.querySelectorAll("li span");

init();

function init() {

	add.addEventListener("click",function(){
	input.classList.toggle("take");
	});

	input.addEventListener("keypress",function(i){
	    if(i.which===13&&input.value!==""){
	    	newTodo(input.value);
	    	modify();
	    	input.value="";
	    };
	});

	modify();

}

function newTodo(value) {
	ul.innerHTML+="<li><span>X</span> "+value+"</li>";
};

function modify(){
	li=document.querySelectorAll("li");
	trash=document.querySelectorAll("li span");
	for (var i = li.length - 1; i >= 0; i--) {
		li[i].addEventListener("click",function(){
			this.classList.toggle("done");
		});
		trash[i].addEventListener("click",function(){
			remove(this.parentNode);
		});
	}
}

function remove(el){
	fadeOut(el);
	setTimeout(function() {
		el.parentNode.removeChild(el);
	},300);
}

function fadeOut(el) {
  var opacity = 1;

  el.style.opacity = 1;
  el.style.filter = '';

  var last = +new Date();
  var tick = function() {
    opacity -= (new Date() - last) / 400;
    el.style.opacity = opacity;
    el.style.filter = 'alpha(opacity=' + (100 * opacity)|1 + ')';

    last = +new Date();

    if (opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

//End of file
