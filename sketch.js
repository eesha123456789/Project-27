var num=10;
console.log(num)
var name='Eesha'
console.log(name)
var bool=true
console.log(bool)
var obj
console.log(obj)
var obj2=null
console.log(obj2)
num=null
console.log(num)
if(obj2===num){
	console.log('matching')
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world
var bobObject1,bobObject2, bobObject3,bobObject4,bobObject5;
var roofObject,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new Bob(300,300,25)
	bobObject2= new Bob(350,300,25)
	bobObject3= new Bob(400,300,25)
	bobObject4= new Bob(450,300,25)
	bobObject5= new Bob(500,300,25)
	roofObject=new Roof(400,100,400,20)
	rope1 = new Rope(bobObject1.body,roofObject.body,-100,0)
	rope2 = new Rope(bobObject2.body,roofObject.body,-50,0)
	rope3 = new Rope(bobObject3.body,roofObject.body,0,0)
	rope4 = new Rope(bobObject4.body,roofObject.body,50,0)
	rope5 = new Rope(bobObject5.body,roofObject.body,100,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roofObject.display()
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  drawSprites();
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-200,y:0})
	}
}