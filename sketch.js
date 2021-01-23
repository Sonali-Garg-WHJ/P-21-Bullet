var bullet,wall;
var bspeed,bweight, wthickness;
var damage;
var gameState = "play";

function setup() {

createCanvas(1600,400);

bullet = createSprite(50, 200, 10, 50);
bullet.shapeColor = "white";

wthickness = Math.round(random(22,83));
    
wall = createSprite(800,200,wthickness,height/2);
wall.shapeColor = "grey";

}

function draw() {
  background("pink"); 

 if (gameState==="play"){

    console.log(wthickness);

    wall.shapeColor = "grey";

    textSize(30);
    text("Press Space to start the checking",200,200);
    if (keyDown("space")){

      bspeed = Math.round(random(223,321));
      bweight = Math.round(random(30,52));
            
      bullet.velocityX = 5;
      
      damage = (0.5*bweight*bspeed*bspeed)/(wthickness*wthickness*wthickness);

    gameState = "game";
    } 
  }else if(gameState==="game" ){
    if (wall.x-bullet.x<(wall.width+bullet.width)/2){

      bullet.velocityX = 0
             
      gameState = "end";
    }
    
  } else if (gameState==="end"){
    textSize(30);
    text(" Press Enter to Restart",200,200);

    if (damage<10){
      wall.shapeColor = "green";
      text("Strong Material:"+damage,200,100);
    }else if(damage>10){
      wall.shapeColor = "red"; 
      text("Weak Material:"+damage,200,100);
    } else if (damage===10){
      text("no damage"+damage,200,200);
    } 

      if (keyDown("enter")){
        gameState = "play";
        bullet.x = 50;
        bullet.y = 200;
        wthickness = Math.round(random(22,83));
        wall.width = wthickness;
      }
  }

  drawSprites();
}