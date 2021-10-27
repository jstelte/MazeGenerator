class Cell {
  constructor(posX, posY, width) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.sides = [true, true, true, true];
  }

  show(){
    console.log('original x' + this.posX);
    let x = this.posX * this.width;
    console.log('x positions:' + x);
    let y = this.posY * this.width;
    stroke(255);

    if(this.sides[0]){
      line(x, y, x + w, y);
    }
    if(this.sides[1]){
      line(x + w, y, x + w, y + w);
    }
    if(this.sides[2]){
      line(x + w, y + w, x, y + w);
    }
    if(this.sides[3]){
      line(x, y + w, x, y);
    }
  }
}

