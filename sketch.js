var canvas;
var music;
var box1,box2,box3,box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(0,580,360,30);
    box1.shapeColor=("red");

    box2 = createSprite(295,580,200,30);
    box2.shapeColor=("blue");

    box3 = createSprite(515,580,200,30);
    box3.shapeColor=("green");

    box4 = createSprite(740,580,220,30);
    box4.shapeColor=("yellow");

    //create ball sprite and give velocity
    ball = createSprite(random(20,750),100,50,50);
    ball.shapeColor=("white");
    ball.velocityX = 4;
    ball.velocityY = 5;
}


function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(ball.isTouching(box1)&& ball.bounceOff(box1)){
        ball.shapeColor=("red");
    }
    if(ball.isTouching(box2)&& ball.bounceOff(box2)){
        ball.shapeColor=("blue");
    }
    if(ball.isTouching(box3)&& ball.bounceOff(box3)){
        ball.shapeColor=("green");
    }
    if(ball.isTouching(box4)&& ball.bounceOff(box4)){
        ball.shapeColor=("yellow");
    }
drawSprites();
}

