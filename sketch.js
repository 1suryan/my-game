function preload() {

  groundI = loadImage("images/ground2.png")
   marioI = loadAnimation("images/mario00.png","images/mario01.png","images/mario02.png","images/mario03.png")
bgI = loadImage("images/bg.png")
obsI = loadAnimation("images/obstacle1.png","images/obstacle2.png","images/obstacle3.png","images/obstacle4.png")


}


function setup() {

  createCanvas(600,350)



  ground = createSprite(300,310,600,20)
  ground.addImage(groundI)
console.log(ground.width)
ground.x = ground.width/2
mario = createSprite(50,255)
mario.addAnimation("marioruns",marioI)

}



function draw() {

  background(bgI)
  
  ground.velocityX = -2

  if(ground.x<0) {
   ground.x = ground.width/2
  }

  if(keyDown("space") && mario.y>=251) {
    mario.velocityY = -10
  }
  



  mario.velocityY = mario.velocityY + 0.5
  
  mario.collide(ground)

  console.log(mario.y)

 
  drawSprites()

  spawnEnemies()

}

  function spawnEnemies() {
    
    if(frameCount % 60 === 0) {

      obstacles = createSprite(600,250)
      obstacles.addAnimation("obsAn",obsI)
      obstacles.velocityX = -3
      obstacles.scale = .7
      obstacles.lifetime = 210
    }    

  }


