var fairy,fairyImg;
var star,starImg;

function preload()
{
   //preload the images here
   fairyImg=loadImage("fairy2.png");
   starImg=loadImage("star.png");

}

function setup() {
  createCanvas(800, 750);
  star=createSprite("300,400,50,50");
  star.addImage(starImg);
  star.scale=0.2;
  fairy=createSprite("500,100,50,60");
  fairy.addImage(fairyImg);
  fairy.scale=0.4


}


function draw() {
  background("black");
if(keyDown("left")){
fairy.x=-5;

}
if(keyDown("right")){
fairy.x=5;

}
drawSprites();
}
