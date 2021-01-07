
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,banana,invisibleGround

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);

monkey = createSprite(80,350,20,20)
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;  
ground = createSprite(400,396,900,10); 
ground.velocityX=-4;
ground.x=ground.width/2;
invisibleGround = createSprite(400,394,900,10);
invisibleGround.visible = false;
FoodGroup = new Group();
obstacleGroup = new Group()
  
}


function draw() {
        background("white")       


                if(keyDown("space")&& monkey.y >= 100) {
                monkey.velocityY = -13;
                }
  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(invisibleGround);
            if(ground.x<200){
               ground.x = 200
                        }
 spawnObstacles();
 Food();
 drawSprites();
 

}
  


function Food(){
        if (frameCount % 80 === 0) {
               banana = createSprite(600,100,40,10);
               banana.y = Math.round(random(10,60));
               banana.addImage(bananaImage);
               banana.scale = 0.5;
               banana.velocityX = -3;
               banana.scale=0.1;
               FoodGroup.add(banana);

               
           }
}



function spawnObstacles(){
        if (frameCount % 80 === 0){
          var obstacle = createSprite(400,380,10,40);
          obstacle.velocityX = -6;
       
         
           // //generate random obstacles
           var rand = Math.round(random(120,200));
           switch(rand) {
             case 1: obstacle.addImage(monkey_running);
                     break;
             case 2: obstacle.addImage(monkey_running);
                     break;
             case 3: obstacle.addImage(monkey_running);
                     break;
             case 4: obstacle.addImage(monkey_running);
                     break;
             case 5: obstacle.addImage(monkey_running);
                     break;
             case 6: obstacle.addImage(monkey_running);
                     break;
              case 7: obstacle.addImage(monkey_running);
                     break;
              case 8: obstacle.addImage(monkey_running);
                     break;       
             default: break;
           }
          
           //assign scale and lifetime to the obstacle           
           obstacle.scale = 0.5;
           obstacle.lifetime = 300;
          
          //adding obstacles to the group
          obstacleGroup.add(obstacle);
        }
}