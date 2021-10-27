let grid = [];
let w  = 20;
let cols, rows;

function setup() {
	createCanvas(400, 400);
	//calculate the amount of columns by dividing the width of the canvas by the size of the cells
	cols = floor(width / w);
	rows = floor(height / w);

	for(let i = 0; i < rows; i++){
		for(let j = 0; j < cols; j++){
			let cell = new Cell(j, i, w);
			grid.push(cell);
		}
	}

	noLoop();

}

function draw() {
	background(220);

	for(let i = 0; i < grid.length; i++){
		grid[i].show();
	}

}
