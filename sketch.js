
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    beam1= new Beam(400,200,400,20)
	ball1= new Ball(250,500,40,40)
	rope1= new Rope(ball1.body,{x:250,y:200})
	ball2= new Ball(300,500,40,40)
	rope2= new Rope(ball2.body,{x:300,y:200})
	ball3= new Ball(350,500,40,40)
	rope3= new Rope(ball3.body,{x:350,y:200})
	ball4= new Ball(400,500,40,40)
	rope4= new Rope(ball4.body,{x:400,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball1.display();
  beam1.display();
  rope1.display();
  ball2.display();
  
  rope2.display();
  ball3.display();
  
  rope3.display();
  ball4.display();
 
  rope4.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position,{x:-105,y:105})
	}
}


