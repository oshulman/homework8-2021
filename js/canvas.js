// Variables!
var radius = 15;
var x = 50;
var y = 150;

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");

// I would add more variables for x, y, radius, and color
/*var x;
var y;
var radius;*/
var currentColor = "red";


canvas.width = 0.75 * window.innerWidth;
canvas.height = 0.75 * window.innerHeight;


window.addEventListener("resize", function(){
	canvas.width = 0.75 * window.innerWidth;
	canvas.height = 0.75 * window.innerHeight;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
})


//Listeners!!
//Add a listener for loading the window
window.addEventListener("load", function(){
	console.log("window loaded");
});

//Add a listener for the mouse movement (started below)
//Add a listener for the key events (started below)


function draw(){
	console.log("I am going to draw!!");
	ctx.beginPath();

}


function initialDraw(e){
	x = e.clientX;
	y = e.clientY;
	draw();
	ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
	ctx.fillStyle = currentColor;
	ctx.fill();
}

function mouseDraw(){
	canvas.addEventListener('mousemove', initialDraw);

}

function removeDraw(){
	canvas.removeEventListener('mousemove', initialDraw);
}

mouseDraw();

//Add a listener for the keydown
document.addEventListener('keydown', function(e){
	console.log(this);
	console.log(e);
	//console.log(e.key);
	//console.log(e.code);
	if (e.key == 'b'|| e.key == 'B') {
		//colorPicker.innerHTML = 'blue';
		currentColor = 'rgb(0,0,255)';
	} else if (e.key == 'y' || e.key == 'Y') {
		currentColor = 'rgb(255,255,0)';
	} else if (e.key == 'g' || e.key == 'G') {
		currentColor = 'rgb(0,128,0';
	} else if (e.key == 'r' || e.key == 'R') {
		currentColor = 'rgb(255,0,0)';
	} else if (e.key == ' ') {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	} else if (e.key == 'ArrowUp'){
		removeDraw();
	} else if (e.key == 'ArrowDown'){
		mouseDraw();
	}
});

colorPicker.addEventListener('change', function(e){
	currentColor = e.target.value;
});


