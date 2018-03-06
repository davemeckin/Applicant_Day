

// initial values
var radius = 25; // radius of the bubbles
var speed = 3; // speed of the bubbles



var gui; // the gui object
var bubbles = []; // array to store the bubble objects
var firstColour; // our first colour

function setup() {
  	createCanvas(windowWidth, windowHeight); // create a canvas that fills the window
	angleMode(DEGREES); // all angles in degrees (0-360)
	firstColour = color(200,200,200); // initalise our first colour

	//STAGE 4 GOES HERE 

  	gui = createGui('slider-range');
  	gui.addGlobals('radius', 'speed');


  	//STAGE 1 GOES HERE 

  	
	for (var i = 0; i < 5; i++) {
		bubbles[i] = new Bubble(random(50,width-50),random(50,height-50), radius, speed, firstColour);
	} 
}

//STAGE 3 GOES HERE
function mousePressed() {
	var colour = color(random(150,255),random(150,255),random(150,255));
  	bubbles.push(new Bubble(mouseX,mouseY, random(1,radius), random(1,speed),colour));
}


function draw() {
	background(0);

	//STAGE 2 GOES HERE
	for (var i = 0; i < bubbles.length; i++) {

	bubbles[i].move();
	bubbles[i].display();

	
	}

}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


class Bubble {
	
	constructor(startX, startY, startRadius, startSpeed, colour){
		
		this.x = startX;
		this.y = startY;
		this.r = startRadius;

		this.xSpeed = startSpeed;
		this.ySpeed = startSpeed;
		this.xDir = random(-1,1);
		this.yDir = random(-1,1);

		this.angle = random(0,360);

		this.colour = colour;
		console.log(this.colour);

	}


	move() {
		
		this.x = this.x + (this.xSpeed * this.xDir);
		this.y = this.y + (this.ySpeed * this.yDir);

		if(this.x > (width-(this.r)) || this.x < (this.r)){
			this.xDir = this.xDir * -1;
			
		}

		if(this.y > (height-(this.r)) || this.y < (this.r)){
			this.yDir = this.yDir * -1;
		}

	}

	display() {
		strokeWeight(random(1,5));
		stroke(this.colour);
		noFill();
		ellipse(this.x, this.y,this.r*2,this.r*2);
		push();
		translate(this.x, this.y);
		rotate(this.angle);	
		pop();

	}

}