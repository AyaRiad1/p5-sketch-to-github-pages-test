let bubbles= [];


function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(0);
  
    for(let i =0; i<bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].bounce();
    bubbles[i].show();
  }
}

function mousePressed(){
  
  let interactiveBubble = new Bubble(mouseX, mouseY, random(-10,10), random(-10,10));
  bubbles.push(interactiveBubble);
  
}

  function keyPressed(){
  
  bubbles.pop(interactiveBubble);
  
}

