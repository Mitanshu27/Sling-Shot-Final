const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6;
var b1, b2, b3, b4, b5, b6;
var ground, ground2;
var ball, slingShot;

var score = 0;
var time = 120; 
var gamestate = "onsling";
var boxes = [box1, box2, box3, box4, box5, box6, b1, b2, b3, b4, b5, b6];
var length = boxes.length;
function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,385,1200,20);
    ground2 = new Ground(544,190,200,20);
    box1 = new Box(900,320,50,50,0,"yellow.png");
    box2 = new Box(950,320,50,50,0,"red.png");
    box3 = new Box(850,320,50,50,0,"green.png");
    box4 = new Box(870,245,50,50,0,"orange.png");
    box5 = new Box(920,245,50,50,0,"blue.png");
    box6 = new Box(895,220,50,50,0,"white.png");
    b1 = new Box(490,180,50,50,0,"yellow.png");
    b2 = new Box(540,180,50,50,0,"green.png");
    b3 = new Box(590,180,50,50,0,"white.png");
    b4 = new Box(510,55,50,50,0,"red.png");
    b5 = new Box(560,55,50,50,0,"orange.png");
    b6 = new Box(535,30,50,50,0,"blue.png");
    ball = new Ball(276,276,50,50,0);
    slingShot = new Slingshot(ball.body,{x:277,y:277});
}

function draw()
{
    background(0);
    Engine.update(engine);
    box1.display();
    box1.score1();
    box2.display();
    box2.score1();
    box3.display();
    box3.score1();
    box4.display();
    box4.score1();
    box5.display();
    box5.score1();
    box6.display();
    box6.score1();
    b1.display();
    b1.score1();
    b2.display();
    b2.score1();
    b3.display();
    b3.score1();
    b4.display();
    b4.score1();
    b5.display();
    b5.score1();
    b6.display();
    b6.score1();
    ground.display();
    ground2.display();
    console.log(score);
    if(frameCount % 60 === 0)
    {
        time = time - 1;
    }
    if(time <= 0)
    {
        textSize(50);
        fill("red");
        text("GAME OVER",400,300);
        time = 0;
    }
    if(score === 12)
    {
        textSize(50);
        fill("red");
        text("YOU WIN",450,300);
        time = "-"
    }
    ball.display();
    slingShot.display(); 
    textSize(16);
    fill("yellow");
    text("Press space to bring the ball again",50,60);
    textSize(30);
    fill("green");
    text("Time:- "+time,1000,60);
    textSize(30);
    fill("blue");
    text("Score:- "+score,1000,90);
}
function mouseDragged()
{
        Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    slingShot.fly();
}
function keyPressed()
{
    if(keyCode === 32)
    {
        slingShot.attach(ball.body);
    }
}