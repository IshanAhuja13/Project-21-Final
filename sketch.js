var canvas;
var music;
var block1, block2, block3, block4;
var object;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);

    block1 = createSprite(90, 590, 200, 30);
    block1.shapeColor = "orange";

    block2 = createSprite(310, 590, 200, 30);
    block2.shapeColor = "green";

    block3 = createSprite(530, 590, 200, 30);
    block3.shapeColor = "blue";

    block4 = createSprite(750, 590, 200, 30);
    block4.shapeColor = "purple";
    //create 4 different surfaces

    object = createSprite(random(100,790), 30, 30, 30);
    object.shapeColor = "black";
    object.velocityX = 2;
    object.velocityY = 3;

    console.log(object.x);

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();  // edges is an array variable. It stores 4 different values
    object.bounceOff(edges);
    

    // Condition for block 1
    if(isTouching(object, block1)){
        object.shapeColor = "orange";
        music.play();
        bounceOff(object, block2);
        console.log("orange");
    }

    // Condition for block 2
    else if(isTouching(object, block2)){
        object.shapeColor = "green";
        object.velocityX = 0;
        object.velocityY = 0;

        bounceOff(object, block2);
        console.log("green");
        music.play();
    }

    //Condition for block 3
    else if(isTouching(object, block3)){
        object.shapeColor = "blue";
        music.play();
        bounceOff(object, block2);
    }

    //Condition for block 4
    else if(isTouching(object, block4)){
        object.shapeColor = "purple";
        music.play();
        bounceOff(object, block2);
    }

    drawSprites();

    //add condition to check if box touching surface and make it box
}

function isTouching(object1, object2){
    if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
        return true;
    }

    else{
        return false;
    }
}

function bounceOff(object1, object2){
    if(object1.x - object2.x < object2.width/2 + object1.width/2
       && object2.x - object1.x < object2.width/2 + object1.width/2){

        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
    }
    if(object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2){
 
         object1.velocityY = object1.velocityY * (-1);
         object2.velocityY = object2.velocityY * (-1);
     }

}

