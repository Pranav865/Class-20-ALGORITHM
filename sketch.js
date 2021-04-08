
var a,n,z,t;


function setup() {
  createCanvas(1200,1200);
 a= createSprite(400, 200, 80, 80);
 t= createSprite(200, 200, 50, 50);
 n= createSprite(700, 600, 30, 30);
 z=createSprite(900, 500, 100, 100);
  a.shapeColor="red";
  t.shapeColor="blue";
  n.shapeColor="yellow";
  z.shapeColor="lime";
}

function draw() {
  background("black");  
a.x=mouseX;
a.y=mouseY;

if(a.x-t.x<a.width/2+t.width/2 && t.x-a.x<t.width/2+a.width/2 && 
  a.y-t.y<a.height/2+t.height/2 && t.y-a.y<t.height/2+a.height/2 ){
a.shapeColor="orange";
t.shapeColor="orange";
}
else{
  a.shapeColor="red";
  t.shapeColor="blue";
}


if(a.x-z.x<a.width/2+z.width/2 && z.x-a.x<z.width/2+a.width/2 && 
  a.y-z.y<a.height/2+z.height/2 && z.y-a.y<z.height/2+a.height/2 ){
a.shapeColor="pink";
z.shapeColor="pink";
}
else{
  //a.shapeColor="red";
  z.shapeColor="lime";
}
console.log(a.x-t.x);
  drawSprites();
}