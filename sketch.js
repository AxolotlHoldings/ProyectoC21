
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var ball;
var groundObj;
var leftside;
var rightside;
var radius = 40;

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	var ball_options = {
		isStatic: false,
		restitution: 0.03,
		friction: 0,
		density: 1.2
	}


	ball = Bodies.circle(100, 100, radius/2, ball_options);
	World.add(world, ball);

	groundObj = new ground(width/2, 470, width, 20);
	leftside = new ground(500, 400, 20, 120);
	rightside = new ground(700, 400, 20, 120);

	Engine.run(engine);
	
  
}


function draw() {
	rectMode(CENTER);
  	background(0);
	Engine.update(engine);
	fill("green");
	ellipse(ball.position.x, ball.position.y, radius, radius);
	

	groundObj.display();
	leftside.display();
	rightside.display();

}


function keyPressed(){
if(keyCode === UP_ARROW){
	console.log("Se ha presionado el botón");
	Body.applyForce(ball, {x: 0,y: 0}, {x: 40,y: 22.5});
		  
}
}