
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papper ,wall1,wall2,wall3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	papper=new Papper(200,400,40)
	wall1=new Dustbin(700,700,100,10)
	wall2=new Dustbin(751,650,10,100)
	wall3=new Dustbin(650,650,10,100)
	ground= new Dustbin(400,700,1200,20)
	



	Engine.run(engine);
  
}


function draw() {
Engine.update(engine)

  rectMode(CENTER);
  background(0);
  papper.display()
  wall1.display()
  wall2.display()
  wall3.display()  
 ground.display()
}

function keyPressed(){
	if(keyCode === 32){
Matter.Body.applyForce(papper.body,papper.body.position,{x:220,y:-250})

	}
}



