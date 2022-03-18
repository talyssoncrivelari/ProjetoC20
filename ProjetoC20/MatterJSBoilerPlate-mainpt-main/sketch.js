const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Angle = Matter.Angle;

let world;
let engine;
let ground;
let ball;
let block1;
let block2;
let miniBlock1;
let miniBlock2;
let miniBlock3;
let miniBall1;
let miniBall2;
let miniBall3;

function preload(){
}

function setup(){

createCanvas(600, 500);
engine = Engine.create();
world = engine.world;

let ground_options = {
  isStatic : true,
}
let ball_options = {
  restitution : 0.2,
  friction : 0.02,
  frictionAir : 0,
}
let block1_options = {
  restitution : 0.3,
  friction : 0.01,
  frictionAir : 0.1,
}
let block2_options = {
  restitution : 0.01,
  friction : 1,
  frictionAir : 0.3,
}
let miniBlock1_options = {
  restitution : Math.round(random(0.1, 0.5)),
  frictionAir : Math.round(random(0.3, 0.03)),
}
let miniBall_options = {
  restitution : Math.round(random(0.1, 0.5)),
  frictionAir : Math.round(random(0.2, 0.02)),
}

ground = Bodies.rectangle(300, 499, 600, 20, ground_options);
World.add(world, ground);
ball = Bodies.circle(225, 10, 32.5, ball_options);
World.add(world, ball);
block1 = Bodies.rectangle(100, 50, 75, 75, block1_options);
World.add(world, block1);
block2 = Bodies.rectangle(450, 50, 150, 75, block2_options);
World.add(world, block2);
miniBlock1 = Bodies.rectangle(Math.round(random(10,590)), 20, 20, 20, miniBlock1_options);
World.add(world, miniBlock1);
miniBlock2 = Bodies.rectangle(Math.round(random(10,590)), 20, 20, 20, miniBlock1_options);
World.add(world, miniBlock2);
miniBlock3 = Bodies.rectangle(Math.round(random(10,590)), 20, 20, 20, miniBlock1_options);
World.add(world, miniBlock3);
miniBall1 = Bodies.circle(Math.round(random(10,590)), 10, 15, miniBall_options);
World.add(world, miniBall1);
miniBall2 = Bodies.circle(Math.round(random(10,590)), 10, 15, miniBall_options);
World.add(world, miniBall2);
miniBall3 = Bodies.circle(Math.round(random(10,590)), 10, 15, miniBall_options);
World.add(world, miniBall3);

rectMode(CENTER);
ellipseMode(RADIUS);
Engine.run(engine);
}

function draw() {
  
  background(0);
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, 600, 20);
  ellipse(ball.position.x, ball.position.y, 32.5);
  rect(block1.position.x, block1.position.y, 75, 75);
  rect(block2.position.x, block2.position.y, 150, 75);
  rect(miniBlock1.position.x, miniBlock1.position.y, 20, 20);
  rect(miniBlock2.position.x, miniBlock2.position.y, 20, 20);
  rect(miniBlock3.position.x, miniBlock3.position.y, 20, 20);
  ellipse(miniBall1.position.x, miniBall1.position.y, 15);
  ellipse(miniBall2.position.x, miniBall2.position.y, 15);
  ellipse(miniBall3.position.x, miniBall3.position.y, 15);
  
  drawSprites();
}