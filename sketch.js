const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1;
var ground2;
var ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,
block15,block16,block17,block18,block19,block20;
var polygon;
var slingshot1;
var polygonImg;
var backgroundImg;
function preload(){
  polygonImg=loadImage("polygon.png");
  getTime()
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  ground1=new Ground(350,350,230,10);
  ground2=new Ground(565,250,180,10);
  ground3=new Ground(800,400,3200,10);
  block1=new Box(280,325,30,40);
  block2=new Box(310,325,30,40);
  block3=new Box(340,325,30,40);
  block4=new Box(370,325,30,40);
  block5=new Box(400,325,30,40);
  block6=new Box(430,325,30,40);
  block7=new Box(401,285,30,40);
  block8=new Box(371,285,30,40);
  block9=new Box(341,285,30,40);
  block10=new Box(311,285,30,40);
  block11=new Box(371,245,30,40);
  block12=new Box(341,245,30,40);
  block13=new Box(354,205,30,40);
  block14=new Box(520,225,30,40);
  block15=new Box(550,225,30,40);
  block16=new Box(580,225,30,40);
  block17=new Box(610,225,30,40);
  block18=new Box(580,185,30,40);
  block19=new Box(550,185,30,40);
  block20=new Box(565,145,30,40);
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot1=new slingshot(this.polygon,{x:100,y:200});
  
  }

function draw() {
  if(backgroundImg)
  background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);  
    ground1.display();
    ground2.display();
    ground3.display();
    fill("lightblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    fill("pink");
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    fill("green");
    block11.display();
    block12.display();
    block18.display();
    block19.display();
    fill("grey"); 
    block13.display();
    block20.display();
    slingshot1.display();
     imageMode(CENTER)
     image(polygonImg,polygon.position.x,polygon.position.y,40,40);
      }

      function mouseDragged(){
      Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
      }


      function mouseReleased(){
      slingshot1.fly();
      }
      function keyPressed(){
      if(keyCode===32){
      slingshot1.attach(this.polygon);
    }
}
async function getTime (){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if (hour>=06 && hour<=18){
        bg="daylight.jpg"

    }
    else{
        bg="night.jpg"
    }
    backgroundImg = loadImage(bg)
}