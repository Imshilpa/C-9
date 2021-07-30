var box;

function setup() {
  createCanvas(800,800);

  //defining the sprites
  box = createSprite(100,200,50,10);

}

function draw() 
{
   background("pink");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x + 11;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -11;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 11;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 11;
  }
//creating the sprites on the canvas
  drawSprites();
}




