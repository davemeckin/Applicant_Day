

// initial values
var radius = 25; // radius of the bubbles
var speed = 3; // speed of the bubbles

// min and max values
var radiusMin = 10;
var radiusMax = 50;
var speedMin = 1;
var speedMax = 20;

var gui; // the gui object
var bubbles = []; // array to store the bubble objects

function setup() {
  	createCanvas(windowWidth, windowHeight); // create a canvas that fills the window
	angleMode(DEGREES); // all angles in degrees (0-360)

	// create the GUI
  	gui = createGui('slider-range');
  	gui.addGlobals('radius', 'speed');

	for (var i = 0; i < 5; i++) {
		bubbles[i] = new Bubble(random(50,width-50),random(50,height-50), radius, speed);
	} 
}


function mousePressed() {
  bubbles.push(new Bubble(mouseX,mouseY, random(1,radius), random(1,speed)));
}


function draw() {
	background(0);

	for (var i = 0; i < bubbles.length; i++) {

	bubbles[i].move();
	bubbles[i].display();

		for (var j = 0; j < bubbles.length; j++) {
	
			if (i != j && bubbles[i].intersects(bubbles[j])){

				bubbles[i].spin(random(0.1,1));
				bubbles[j].spin(random(0.1,1));
			}

		}
	}

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

	spin(val) {
		this.angle = this.angle+val;
	}


	intersects(other) {
		var d = dist(this.x, this.y, other.x, other.y);
		if (d < this.r + other.r) {
		return true;
		} else {
		return false;
		}
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