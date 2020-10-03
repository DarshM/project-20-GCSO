const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var engine, world, ground;
 var ball;

function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;
 
  var options = {
    isStatic : true
  }
 
  ground = Bodies.rectangle(200,395,200,20,options);
  World.add(world,ground);

  var bOptions={
  restitution:0.0
  }
 ball=Bodies.circle(200,100,20,bOptions);
World.add(world,ball);
  console.log(ball);
 
}
 
function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(ground.position.x,ground.position.y,400,10);
  ellipse(ball.position.x,ball.position.y,20);
}
 
