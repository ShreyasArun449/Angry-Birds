const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var box1,box2;
var engine,world,ball;

function setup() {
  createCanvas(800,800);
 engine = Engine.create();
 world = engine.world;

box1 = new Box(200,300,50,50);
box2 = new Box(200,100,50,100);
ground = new Ground(400,390,800,20);
}

function draw() {
  background(0); 
  Engine.update(engine) 

box1.display(); 
box2.display();
ground.display()
  drawSprites();
}