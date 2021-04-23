
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var side0,side1,side3;

function setup() {
	createCanvas(1600, 600);
	rectMode(CENTER);

   engine = Engine.create();
	world = engine.world;

	paper1=new Paper(200,450,40);
	ground1=new Ground(width/2,670,width,20)

   side0 = new Dustbin(550, 620, 20, 100);
   side1 = new Dustbin(635, 660, 150, 20);
   side2 = new Dustbin(720, 620, 20, 100);


   //Create the Bodies Here.
    Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  
paper1.display();
ground1.display();
side0.display();
side1.display();
side2.display();

drawSprites();
 
 
}

function keyPresses(){
   if(keyCode==UP_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObjective.body.position,{x:85, y:-85})
   }
}


