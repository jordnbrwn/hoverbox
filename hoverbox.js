
const boxes = document.getElementsByClassName("box");
console.log(boxes.length);

for (var x = 0; x < boxes.length; x++) {
	boxes[x].addEventListener("mousemove", moveBox);
}

function moveBox(e) {
	let boxSize = this.getBoundingClientRect();
	let boxWidth = this.offsetWidth/2;
	let boxHeight = this.offsetHeight/2;

	let xPos = e.clientX-Math.round(boxSize.left);
	let yPos = e.clientY-Math.round(boxSize.top);

	let boxOffsetX = (xPos - boxWidth);
	let boxOffsetY = (yPos - boxHeight);

	let rotateX = (boxOffsetX/boxWidth)*3;
	let rotateY = (boxOffsetY/boxHeight)*3;
	
	this.style.transform = `rotateY(${rotateX}deg)`;
	this.style.transform += `rotateX(${-rotateY}deg)`;
	this.style.background = `radial-gradient(at ${xPos}px ${yPos}px,#fff,#efefef)`;

	this.addEventListener("mouseout", function(e) {
		this.style.transform = "";
	});
};