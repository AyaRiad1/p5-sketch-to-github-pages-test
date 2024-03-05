class Bubble {
  constructor(x,y,xspeed,yspeed) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }

  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xspeed = this.xspeed * -1;
    }

    if (this.y > height || this.y < 0) {
      this.yspeed = this.yspeed * -1;
    }
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(200, 0, 200);
    ellipse(this.x, this.y, 24, 24);
  }
}
