const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var ground;

function setup() {
  createCanvas(400,400);
  myEngine=Engine.create()//myEngine.world - by default its creates in memory.
  myWorld=myEngine.world
  
var options={
  isStatic:true}

  ground= Bodies.rectangle(200,380,400,20,options)
  World.add(myWorld,ground)

 // console.log(ground.position.x)

 var ball_option = {
   restitution:0.8
 }
 ball = Bodies.circle(200,200,50,ball_option)
 World.add(myWorld,ball)
 

}

function draw() {
  background("cyan");  
Engine.update(myEngine)
  rectMode(CENTER);
  fill("brown")
  rect(ground.position.x,ground.position.y,400,10)
  ellipseMode(RADIUS);
  fill("white");
  ellipse(ball.position.x,ball.position.y,20,20);
}