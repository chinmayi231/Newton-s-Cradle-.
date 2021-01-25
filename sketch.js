
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload()
{
	

	
}

function setup() {

	createCanvas(1500, 800);

	var bobDiameter;

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(760, 100, 650, 80);

	bob1 = new Bob(600, 500, 50);

	bob2 = new Bob(750, 500, 50);

	bob3 = new Bob(900, 500, 50);

	bob4 = new Bob(1000, 500, 50);

	rope1 = new Rope(bob1.body, roof.body, -50*4, 0);

	rope2 = new Rope(bob2.body, roof.body, -50*2, 0);

	rope3 = new Rope(bob3.body, roof.body, -50*0, 0);

	rope4 = new Rope(bob4.body, roof.body, -50*-2, 0);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background(0);
  
  Engine.update(engine);

  roof.display();

  bob1.display();

  bob2.display();

  bob3.display();

  bob4.display();

  rope1.display();

  rope2.display();

  rope3.display();

  rope4.display();

  drawSprites();
 
}

function keyPressed() {

	if (keyCode === LEFT_ARROW) {

    Matter.Body.applyForce(bob1.body, bob1.body.position,{x : -350, y : 50});
    
   }
   
   }
