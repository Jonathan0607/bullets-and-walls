
var speed, weight, thickness;
var bullet, wall;

function setup() {
  createCanvas(1600,400);
  
  speed=random(233,321)
  weight=random(30,52) 
  thickness=random(22,83)

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet= createSprite(50, 200, 25, 10);
  bullet.velocityX= speed;
  bullet.shapeColor=color(0,0,0)

}

function draw() {
  background(225,225,225);  
    if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(deformation<10){
      bullet.shapeColor=color(0,255,0)
    }

    if(deformation>10){
      bullet.shapeColor=color(255,0,0)
    }
  }
  drawSprites();
}