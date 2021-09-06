var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg=loadImage("apple.png");
orangeLeafimg=loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var falling=Math.round(random(1,2));
  if(frameCount%80==0){
    if(falling==1){
      createapples()
    }else{}
  }
  drawSprites();
}
function createapples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleimg);
  apple.scale=0.07;
  apple.velocityY=3;
  apple.lifetime=150
}