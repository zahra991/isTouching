var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);
  
  console.log(movingRect.x-fixedRect.x);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
  
}

