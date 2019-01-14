var dif = 60;

function setup() {
	createCanvas(600, 600);
	test();
}

function draw() {
	background(0);
	input();
	branch(width / 2, height, height / 4, -90);
}

//takes user input
function input(){
	dif += 0.5;
	if(keyIsDown(LEFT_ARROW))
		dif -= 0.5;
	if(keyIsDown(RIGHT_ARROW))
		dif += 0.5;
}

function test(){
	print("Hello");
}

function branch(x, y, len, angle)
{
	if (len > 3) {
		var end = branchRotate(x + len, y, x, y, angle);
		stroke(255);
		line(x, y, end.x, end.y);
		
		branch(end.x, end.y, len * 0.67, angle + dif);
		branch(end.x, end.y, len * 0.67, angle - dif);
	}
	else{
		stroke(0, 255, 0)
		ellipse(x, y, 2, 4);
	}
}

function branchRotate(x, y, cx, cy, angle) {
	var ang = radians(angle);
	var ret = {
		x: x,
		y: y
	};
	ret.x = (x - cx) * cos(ang) - (y - cy) * sin(ang) + cx;
	ret.y = (x - cx) * sin(ang) + (y - cy) * cos(ang) + cy;
	return ret; 
};

