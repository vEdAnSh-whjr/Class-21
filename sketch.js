var fixedRect, movingRect;
var rect1, rect2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite (400, 600, 80, 50)
  rect2 = createSprite (200, 300, 73, 47)
  rect1.shapeColor = "green"
  rect2.shapeColor = "green"
  rect1.debug = true
  rect2.debug = true
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
if (isTouching(movingRect,rect1)) {
  movingRect.shapeColor = "red"
  rect1.shapeColor = "red"
}
else {
  movingRect.shapeColor = "green"
  rect1.shapeColor = "green"
}

  
  drawSprites();
}

