
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,stone,rubber,hammer,iron;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,height,1000,30)

	stone = new Stone(950,300,60,60);
	rubber = new Rubber(230,300,60,40);
	hammer = new Hammer(230,200,100,20);
	iron = new Iron(230,200,100,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display();
  stone.display();
  rubber.display();
  hammer.display();
  iron.display();
  drawSprites();
 
}



