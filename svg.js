var s = document.getElementById('vector');
var b = document.getElementById('clear');

var start = false;
var lastx;
var lasty;

var connect = function(e){
	
	console.log(s);

	var x = e.offsetX;
	var y = e.offsetY;
	
	var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r","15");
	c.setAttribute("fill","#00FFFF");
	s.appendChild(c);

	if (start) {
		var l = document.createElementNS("http://www.w3.org/2000/svg","line");
		l.setAttribute("x1", lastx);
		l.setAttribute("y1", lasty);
		l.setAttribute("x2", x);
		l.setAttribute("y2", y);
		l.setAttribute("stroke", "black");
		s.append(l);
	}
	else {
		start = true;	
	};

	lastx = x;
	lasty = y;
};

var clear = function(e) {
	while (s.lastChild) {
	s.removeChild(s.lastChild);
	}
	start = false;
}


s.addEventListener("click", connect);

b.addEventListener("click", clear);
