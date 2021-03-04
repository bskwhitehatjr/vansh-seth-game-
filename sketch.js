var gameState= 0;
var score= 0;


function preload()
{
  vaccineimg=loadImage("Images/vaccine2.png");
  backgroundimg=loadImage("Images/background.png");
  virus1img=loadImage("Images/virus.png");
  background2img=loadImage("Images/background2.png");
  background3img=loadImage("Images/background3.png");
  virus2img=loadImage("Images/virus2.png");
}

function setup() 
{
  createCanvas(3000,1000);

  vaccine=createSprite(400, 750, 50, 50);
  vaccine.addImage(vaccineimg);
  vaccine.scale=0.2;

  virusGroup=new Group();
  virusGroup2=new Group();
 
}

function draw() 
{
  background(0);  
  //drawSprites();
  move();
    if(gameState===0)
    { 
      background(backgroundimg);  
      spawnvirus();
      if (virusGroup.isTouching(vaccine))
      {
        score=score+100
        console.log(score)
        virusGroup.destroyEach();
        if(score>1000)
        {
        gameState=1
        }
      }   
    } 

    if(gameState===1)
    {
      background(background2img); 
    spawnvirus2();
    if (virusGroup2.isTouching(vaccine))
      {
        score=score+200
        console.log(score)
        virusGroup2.destroyEach();
        if(score>3000)
        {
        gameState=2
        }
      }  
    }

    if(gameState===2){
      background(background3img); 
      spawnvirus2();
      spawnvirus();
      if (virusGroup.isTouching(vaccine))
      {
        score=score+500
        virusGroup.destroyEach();
        if(score>6000)
        {
        gameState=4
        }
      }
      if (virusGroup2.isTouching(vaccine))
      {
        score=score+500
        virusGroup2.destroyEach();
        if(score>6000)
        {
        gameState=4
        }
      }

  }
  drawSprites();
  
  textSize(80)
  strokeWeight(10)
  stroke("black");
  fill("red")
  text("SCORE : "+score,50,100);
} 


function spawnvirus()
{  
    if(frameCount%70===0)
    {
      virus = createSprite(3000,100,10,10);
      virus.addImage(virus1img);
      virus.y= Math.round(random(200,800));
      virus.velocityX=-10;
      
      virus.lifetime=300;
      virus.scale=0.7;
     
      virusGroup.add(virus);
      
    }
}

function spawnvirus2()
{  
    if(frameCount%70===0)
    {
      virus2 = createSprite(3000,100,10,10);
      virus2.addImage(virus2img);
      virus2.y= Math.round(random(200,800));
      virus2.x= Math.round(random(1500,2800));
      virus2.velocityX=-30;
      
      virus2.lifetime=300;
      virus2.scale=0.7;
     
      virusGroup2.add(virus2);
      
    }
}
function move(){
  

  if(keyDown(UP_ARROW))
  {
    vaccine.y-=7
  }
  if(keyDown(DOWN_ARROW))
  {
    vaccine.y+=7
  }
  if(keyDown(LEFT_ARROW))
  {
    vaccine.x-=7
  }
  if(keyDown(RIGHT_ARROW))
  {
    vaccine.x+=7
  }

}