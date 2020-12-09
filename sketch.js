
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var floor


var Bob1, Bob2, Bob3, Bob4, Bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	Bobdt = 40
	//Create the Bodies Here.

	

	
	
	

	floor = new roof(800,100,600,20)
	

	Bob1 = new bobObj(550,550,60,PI/4)
	Bob2 = new bobObj(670,550,60,PI/4)
	Bob3 = new bobObj(790,550,60,PI/4)
	Bob4 = new bobObj(910,550,60,PI/4)
	Bob5 = new bobObj(1030,550,60,PI/4)

	rope1 = new rope(Bob1.body,floor.body,-250,-5,Bobdt*2,0)
	rope2 = new rope(Bob2.body,floor.body,-130,-5,Bobdt*2,0)
	rope3 = new rope(Bob3.body,floor.body,-10,-5,Bobdt*2,0)
	rope4 = new rope(Bob4.body,floor.body,110, -5,Bobdt*2,0)
	rope5 = new rope(Bob5.body,floor.body,230,-5,Bobdt*2,0)




	





	
  
}


function draw() {

	Engine.update(engine)
  rectMode(CENTER);
  
  background("lightgreen");

  
  
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 floor.display();
 

  
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(Bob1.body,{x:mouseX, y:mouseY})
}

function mouseReleased() {

//rope1.fly();


}