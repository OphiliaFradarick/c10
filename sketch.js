
var trex ,trex_running;

function preload(){
  trex_running = loadAnimation("trex1.png", 'trex3.png', 'trex4.png');

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,150,20,50);
  trex.shapeColor = 'orange';
  trex.addAnimation("running dino", trex_running);
  trex.scale = 0.5;

  edges = createEdgeSprites();
}

function draw(){
  background("gray")

  if(keyDown('space')){
    trex.velocityY= -10;
  }

  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(edges[3])

  drawSprites();
  

}
