
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drac, creati
var predio1, predio2, predio3, predio4, predio5, predio6

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	predio5 = createSprite(435, 380 , 170, 150);
	predio5.shapeColor = "pink";
	predio4 = createSprite(380,340,70,130);
	predio4.shapeColor = "green";
	predio3 = createSprite(335, 300, 70, 130);
	predio3.shapeColor = "yellow";
	predio2 = createSprite(275,250,70,130);
	predio2.shapeColor = "blue";
	predio1 = createSprite(200, 200, 70, 130);
	drac = createSprite(200, 200, 10, 10);
	drac.shapeColor = "red";
	creati = createSprite(450, 450, 10, 10);
	creati.shapeColor = "yellow";
	

	//Crie os Corpos aqui.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



