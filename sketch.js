var fixedRect,movingRect;fRect
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fRect= createSprite(400,300,50,50);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,fRect)){

    movingRect.shapeColor="red";
    fRect.shapeColor="red";
  }
  else{movingRect.shapeColor="green";
  fRect.shapeColor="green";}

  drawSprites();
}

function isTouching(movingRect,fixedRect){

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 
    && movingRect.x-fixedRect.x<fixedRect.height/2+movingRect.height/2 
    && fixedRect.x-movingRect.x<fixedRect.height/2+movingRect.height/2)
  {

    return true;
  
  }
  else{

  return false;

}
}