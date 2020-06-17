var bullet, wall, thickness;
var speed, weight;
var damage;


function setup() {
  createCanvas(1600,400);

  bullet = createSprite(40,200,50,30);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "white";
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background("black");  

  bullet. velocityX = speed;



  if((wall.x - bullet.x < wall.width/2 + bullet.width/2)  ){

    bullet.x = 1125;
    bullet.y = 200;

damage = ((0.5*weight*speed*speed)/(thickness*thickness*thickness));

if(damage > 10){
wall.shapeColor = "red";
}

if(damage < 10){
  wall.shapeColor = "green";
  }
  
}


  drawSprites();
}