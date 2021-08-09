var bg, bgImg;
var sleep, brush, gym, eat, drink, move;
var astronaut;
var eg;
function preload() {
  bgImg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png", "gym2.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  move = loadAnimation("move.png", "move1.png");


}

function setup() {
  createCanvas(800, 400);




  bg = createSprite(400, 200);
  bg.addImage(bgImg);
  bg.scale = 0.2;

  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1


}

function draw() {
  background(255, 255, 255);

  eg = createEdgeSprites();
  astronaut.bounceOff(eg);
  
  drawSprites();
  
  textSize(25);
  text("Instructions:", 50, 50);
  textSize(12);
  text("Up Arrow = Brushing", 50, 70);
  textSize(12);
  text("Down Arrow = Gymming", 50, 90);
  textSize(12);
  text("Left Arrow = eating", 50, 110);
  textSize(12);
  text("Right Arrow= Bathing", 50, 130);
  textSize(12);
  text("m key  = moving", 50, 150);


  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
   
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("Gymming", gym);
    astronaut.changeAnimation("Gymming");
   
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("Eating", eat);
    astronaut.changeAnimation("Eating");
    
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("Bathing", drink);
    astronaut.changeAnimation("Bathing");
    
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }
if (keyDown("m")){
  astronaut.addAnimation("yo", move);
  astronaut.changeAnimation("yo");

  astronaut.velocityX = 1;
  astronaut.velocityY =1;
}
}

