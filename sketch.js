var dustbin;
var paper;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(600, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
	ground.shapeColor=("brown");
	 World.add(world, ground);

	 paper = new Paper(100,390,70,70,{isStatic:true});
	dustbin = new Dustbin(510,510,100,400);
  
}

function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background("gray");

  paper.display();
  dustbin.display();
  
  //keyPressed();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-300})
}
}
