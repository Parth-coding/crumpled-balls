
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,paperObject
var world,render;


function setup() {
	createCanvas(1300, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject=new Paper(200,400,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();
  
  
}

function keyPressed()
{
	if(keyDown("right_arrow"))
	{
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:95,y:-95});
	}
}

