var maze1,maze2,maze3,maze4,maze5,maze6;
var maze7,maze8,maze9,maze10,maze11,maze12;
var maze13,maze14,maze15,maze16,maze17,maze18;
var maze19,maze20,maze21,maze22,maze23,maze24;

var mario_running,mario_collided,mario_walk;
var ground;
var caterpillar,cloud;
var gameover,restart;


function preload(){
  backgroundImg = loadImage("Images/grass.jpg");
  mario_running= loadAnimation("Images/walk1.png","Images/walk2.png","Images/walk3.png");
  caterpillarimg= loadImage("Images/caterpillar.jpg");
  gameoverimg = loadImage("Images/gameOverText.png");
  restartimg=loadImage("Images/restart.png");
  cloud=loadImage("Images/cloud.png");
  mario_collided=loadImage("Images/marioUp.png");

}

function setup() {
  createCanvas(800,400);
  
  mario = createSprite(50,80,20,50);
  mario.addAnimation("running", mario_running);
  mario.addAnimation("collided", mario_collided);
  mario.scale = 0.47;

 caterpillar=createSprite(200,150,10,40);
 caterpillar.addImage(caterpillarimg);
 caterpillar.scale=0.15;
  
  gameover = createSprite(500,180);
  gameover.addImage(gameoverimg);
  gameover.scale=0.40;
  
  restart = createSprite(330,170);
  restart.addImage(restartimg);
  restart.scale=0.49;

  caterpillarGroup=new Group();

  textSize(18);

  textFont("Georgia");
  textStyle(BOLD);
  fill("white");
  score = 0;

  maze1=createSprite(790,200,15,400);
  maze2=createSprite(10,200,15,400);
  maze3=createSprite(400,8,800,15);
  maze4=createSprite(400,390,800,15);
  maze5=createSprite(84,115,130,30);
  maze6=createSprite(84,40,30,50);
  maze7=createSprite(220,85,30,80);
  maze8=createSprite(120,230,30,100);
  maze9=createSprite(63,230,90,30);
  maze10=createSprite(220,140,90,30);
  maze11=createSprite(320,40,30,50);
  maze12=createSprite(400,130,140,30);
  maze13=createSprite(400,190,30,150);
  maze14=createSprite(300,220,170,30);
  maze15=createSprite(230,290,30,110);
  maze16=createSprite(190,330,160,30);
  maze17=createSprite(400,350,30,70);
  maze18=createSprite(330,325,30,75);
  maze19=createSprite(420,89,30,50);
  maze20=createSprite(540,90,30,150);
  maze21=createSprite(510,170,90,30);
  maze22=createSprite(480,290,30,110);
  maze23=createSprite(560,300,168,30);
  maze24=createSprite(630,330,30,90);
  maze25=createSprite(600,365,96,30);
  maze26=createSprite(740,320,90,30);
  maze27=createSprite(640,240,160,30);
  maze28=createSprite(570,260,30,50);
  maze29=createSprite(700,170,30,120);
  maze30=createSprite(670,100,140,30);
  maze31=createSprite(750,30,60,30);



  

  maze1.shapeColor = "#808000";
  maze2.shapeColor = "#808000";
  maze3.shapeColor = "#808000";
  maze4.shapeColor = "#808000";
  maze5.shapeColor = "black";
  maze6.shapeColor =  "black";
  maze7.shapeColor = "black";
  maze8.shapeColor = "black";
  maze9.shapeColor = "black";
  maze10.shapeColor = "black";
  maze11.shapeColor = "black";
  maze12.shapeColor = "black";
  maze13.shapeColor = "black";
  maze14.shapeColor = "black";
  maze15.shapeColor = "black";
  maze16.shapeColor = "black";
  maze17.shapeColor = "black";
  maze18.shapeColor = "black";
  maze19.shapeColor = "black";
  maze20.shapeColor = "black";
  maze21.shapeColor = "black";
  maze22.shapeColor = "black";
  maze23.shapeColor = "black";
  maze24.shapeColor = "black";
  maze25.shapeColor = "black";
  maze26.shapeColor = "black";
  maze27.shapeColor = "black";
  maze28.shapeColor = "black";
  maze29.shapeColor = "black";
  maze30.shapeColor = "black";
  maze31.shapeColor = "black";
  
  

}

function draw() {
  background(backgroundImg);
  
  gameover.position.x = restart.position.x = camera.x
  
  textAlign(RIGHT, TOP);
  text("Score: "+ score, 700,20);


  


  drawSprites();
}