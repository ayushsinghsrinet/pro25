const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine;
var ball,ballimg;
var h;
var dust1,dust2,dust3;
var ground;
var gc,gcimg;
var tri,trimg;
var cil;
function preload(){
    gcimg=loadImage('S/dustbingreen.png')
   trimg=loadImage('s/paper.png')
}

function setup() {
    var Canvas=createCanvas(1000,600)
    engine=Engine.create()
world=engine.world


var options = {
    'restitution':0.5,
    'friction':1.0,
    'density':1.0
}




var op={
    isStatic:true,
}
ground=Bodies.rectangle(500,570,1000,30,op)
fill("brown")
World.add(world,ground)

dust1=new ok(730,480,15,160)
dust2=new ok(782,480,80,10)
dust3=new ok(830,480,15,160)
gc=createSprite(782,480,10,10)
gc.addImage(gcimg)
gc.scale=0.5
ball=Bodies.circle(200,20,40,options)
ball.image=loadImage('s/paper.png')
World.add(world,ball)
}

function draw(){
    background(255)
    Engine.update(engine)
    imageMode(CENTER)
    image(ball.image,ball.position.x,ball.position.y,110,110)
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,1000,30)
    
    dust1.display();
    dust2.display();
    dust3.display();
   
    keyp();
  
    drawSprites();
}
function keyp(){
    if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:10,y:-15})
    }

}