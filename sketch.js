const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gameState = "Play";

var bgImg;
var scoreImg;

var dart1;
var target1, target2, target3;
var slingy;
var wall;
var edge1, edge2, edge3, edge4;

var score = 0;

function preload() {
    bgImg = loadImage("Design/bg.jpg");
    scoreImg = loadImage("Design/Score.png");
}
function setup() {
    createCanvas(displayWidth, displayHeight-111);

    engine = Engine.create();
    world = engine.world;

    edge1 = new Ground(0, 1536/2, 5, 1536);
    edge2 = new Ground(1536, 1536/2, 5, 1536);
    edge3 = new Ground(1536/2, 0, 1536, 5);
    edge4 = new Ground(1536/2, 753, 1536, 5);

    dart1 = new Dart(400, 450);

    wall = new Ground(1400, 430, 200, 300);

    slingy = new SlingShot(dart1.body, {x:400, y:450})

}


function draw() {

    if (gameState === "Play") {

    background(bgImg);

    Engine.update(engine);

    image(scoreImg, 30, 20);

    textFont("Comic Sans MS");
    textSize(60);
    text(+score, 280, 94);

    drawTargets();

    drawSprites();

    edge1.display();
    edge2.display();
    edge3.display();
    edge4.display();

    slingy.display();
    dart1.display();

    if (dart1.body.position.x > 1000 && dart1.body.position.y > 230 && dart1.body.position.y < 300) {
       score+= 50;
    }
    if (dart1.body.position.x > 1000 && dart1.body.position.y > 490 && dart1.body.position.y < 555) {
        score+= 50;
     }

    if (dart1.body.position.x > 1000 && dart1.body.position.y > 300 && dart1.body.position.y < 370) {
        score+= 100;
     }
     if (dart1.body.position.x > 1000 && dart1.body.position.y > 555 && dart1.body.position.y < 630) {
        score+= 100;
     }

     if (dart1.body.position.x > 1000 && dart1.body.position.y > 370 && dart1.body.position.y < 490) {
        score+= 200;

     }

}

}

function drawTargets() {
    target1 = createSprite(1200, 430);

    target1.draw = function() { 
        fill("#CC0000");
        ellipse(0,0,350,400) 
    };

    target2 = createSprite(1200, 430);

    target2.draw = function() { 
        fill(255);
        ellipse(0,0, 220,250) 
    };

    target3 = createSprite(1200, 430);

    target3.draw = function() { 
        fill("#CC0000");
        ellipse(0,0,100,120) 
    };
}

function mouseDragged(){
    Matter.Body.setPosition(dart1.body, {x: mouseX , y: mouseY});
  }
  
  function mouseReleased(){
    slingy.fly();
  }
  
  function keyPressed() {
      if (keyCode === 32) {
          
          slingy.attach(dart1.body);
          
      }
  }