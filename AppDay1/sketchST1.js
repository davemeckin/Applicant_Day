

// initial values
var radius = 25; // radius of the bubbles
var speed = 3; // speed of the bubbles



var gui; // the gui object
var bubble;
var bubbles = []; // array to store the bubble objects

function setup() {
  	createCanvas(windowWidth, windowHeight); // create a canvas that fills the window
	angleMode(DEGREES); // all angles in degrees (0-360)

  	

	
}


function draw() {
	background(0)

	

		
	
}

// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


class Bubble {
	
	constructor(startX, startY, startRadius, startSpeed){
		
		this.x = startX;
		this.y = startY;
		this.r = startRadius;

		this.xSpeed = startSpeed;
		this.ySpeed = startSpeed;
		this.xDir = random(-1,1);
		this.yDir = random(-1,1);

		this.angle = random(0,360);

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
		strokeWeight(2);
		stroke(255);
		noFill();
		ellipse(this.x, this.y,this.r*2,this.r*2);
		push();
		translate(this.x, this.y);
		rotate(this.angle);
		line(-this.r,0, this.r, 0);
		pop();

	}

}