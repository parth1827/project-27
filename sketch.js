
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var block;
var ball1,ball2,ball3,ball4,ball5;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (600,height,1200,20);
	ball1 = new Ball (500,200,20);
	ball2 = new Ball (550,200,20);
	ball3 = new Ball (600,200,20);
	ball4 = new Ball (650,200,20);
	ball5 = new Ball (700,200,20);
	block = createSprite(600,100,300,30);
	chain1 = new Chain (block.body,ball1.body);
	chain2 = new Chain (block.body,ball2.body);
	chain3 = new Chain (block.body,ball3.body);
	chain4 = new Chain (block.body,ball4.body);
	chain5 = new Chain (block.body,ball5.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  block.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}



