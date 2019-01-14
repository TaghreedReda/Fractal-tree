var rotate;
var branch;
var dif = 300;

function setup() {
	createCanvas(600, 600);
	rotate = function(x, y, cx, cy, angle) {
		var ang = radians(angle);
		var ret = {
			x: x,
			y: y
		};
		ret.x = (x - cx) * cos(ang) - (y - cy) * -sin(ang) + cx;
		ret.y = (x - cx) * sin(ang) + (y - cy) * cos(ang) + cy;
		return ret;
	};
	branch = function(x, y, len, angle) {
		if (len > 1) {
			var end = rotate(x + len, y, x, y, angle);
			stroke(255);
			line(x, y, end.x, end.y);
			
			branch(end.x, end.y, len * 0.67, angle + dif);
			branch(end.x, end.y, len * 0.67, angle - dif);
		}
	}
}

function draw() {
	background(0);
	branch(width / 2, height, height / 4, -90);
}