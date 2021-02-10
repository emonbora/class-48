var pacman, hole1, gameState = 0, start, startImage
var wall1, coin1, coin2, coin3, gate1, gate2, gate3,fruitImage, coinImage, pacmanImage, wood1Image, wood2Image, holeImage, portalImage;
var wall2, youWinImage, ghost, ghostImage, ghostGroup;
var wall3
var wall4 
var wall5
var wall6 
var wall7  
var wall8 
var wall9 
var wall10
var wall11 
var wall12 
var wall13 
var wall14 
var wall15 
var wall16 
var wall17 
var wall18 
var wall19
var wall20
var wall21
var wall22
var obs1,obs2,obs3,obs4,obs5,obs6,obs7,obs8,obs9,obs10,obs11,obs12,obs13,obs14,obs15,obs16,obs17,obs18,obs19,obs20,obs21,obs22,obs23,obs24,obs25,obs26,obs27,obs28,obs29,obs30,obs31;
var portal1,portal2,portal3
var fruit1,fruit2,fruit3
var portalKey1 = 0,portalKey2 = 0,portalKey3 = 0

function preload(){
 startImage = loadImage("start.png")
 coinImage = loadImage("coin.png")
 fruitImage = loadImage("key.png")
 pacmanImage = loadImage("pacman.png")
 wood1Image = loadImage("wood.png")
 wood2Image = loadImage("woodVertical.png")
 holeImage = loadImage("hole.png")
 portalImage = loadImage("portal.png")
 youWinImage = loadImage("you win.jpg")
 ghostImage = loadImage("ghost.png")

}

function setup(){
   createCanvas(400,400)
   createEdgeSprites();
   pacman = createSprite(20,20,20,20)
   pacman.addImage(pacmanImage);
   pacman.scale = 0.03
   wall1 = createSprite(10,60,100,20);
   start = createSprite(200,200)
        start.addImage(startImage)
        start.scale = 0.5
   
   wall2 = createSprite(110,0,20,400);
   wall3 = createSprite(0,250,350,20);
   wall4 = createSprite(350,400,20,150);
   wall5 = createSprite(100,130,100,20);
   wall6 = createSprite(205,200,100,20);
   wall7 = createSprite(200,175,20,150);
   wall8 = createSprite(200,25,20,50);
   wall9 = createSprite(400,100,200,20);
   wall10 = createSprite(300,50,20,50);
   wall11 = createSprite(350,245,20,70);
   wall12 = createSprite(300,250,15,100);
   wall13 = createSprite(345,200,100,20);
   wall14 = createSprite(275,250,45,20);
   wall15 = createSprite(350,150,20,30);
   wall16 = createSprite(175,300,260,20);
   wall17 = createSprite(50,375,15,50);
   wall18 = createSprite(100,330,15,50);
   wall19 = createSprite(150,375,15,50);
   wall20 = createSprite(200,330,15,50);
   wall21 = createSprite(250,375,15,50);
   wall22 = createSprite(300,325,15,50);
   wall1.shapeColor = "black"
   wall2.shapeColor = "black"
   wall3.shapeColor = "black"
   wall4.shapeColor = "black"
   wall4.shapeColor = "black"
   wall5.shapeColor = "black"
   wall6.shapeColor = "black"
   wall7.shapeColor = "black"
   wall8.shapeColor = "black"
   wall9.shapeColor = "black"
   wall10.shapeColor = "black"
   wall11.shapeColor = "black"
   wall12.shapeColor = "black"
   wall13.shapeColor = "black"
   wall14.shapeColor = "black"
   wall15.shapeColor = "black"
   wall16.shapeColor = "black"
   wall17.shapeColor = "black"
   wall18.shapeColor = "black"
   wall19.shapeColor = "black"
   wall20.shapeColor = "black"
   wall21.shapeColor = "black"
   wall22.shapeColor = "black"
   coin2 = createSprite(340, 70, 20,20);
   coin1 = createSprite(150,30,20,20)
   coin3 = createSprite(100,375,20,20)
   gate1 = createSprite(200,75,20,50)
   gate2 = createSprite(200,270,20,40)
   gate3 = createSprite(350,305,20,50)
   hole1 = createSprite(380,375,20,20)
   fruit1 = createSprite(150,50,20,20)
   portal1 = createSprite(330,275,20,20)
   fruit1.addImage(fruitImage)
   fruit1.scale = 0.1
   portal1.shapeColor = "blue"
   fruit2 = createSprite(180,275,20,22)
   portal2 = createSprite(30,180,20,20)
   fruit2.addImage(fruitImage)
   fruit2.scale = 0.1
   portal2.shapeColor = "green"
   portal2.addImage(portalImage)
   portal2.scale = 0.1
   portal1.addImage(portalImage)
   portal1.scale = 0.1
   
   coin1.addImage(coinImage)
   coin2.addImage(coinImage)
   coin3.addImage(coinImage)
   coin1.scale = 0.1
   coin2.scale = 0.1
   coin3.scale = 0.1
   
   //coin1.shapeColor = "Red"
   //coin2.shapeColor = "Red"
  // coin3.shapeColor = "Red"
   gate1.shapeColor = "blue"
   gate2.shapeColor = "blue"
   gate3.shapeColor = "blue"
   gate1.addImage(wood2Image);
   gate1.scale = 0.3
   gate2.addImage(wood2Image);
   gate2.scale = 0.3
   gate3.addImage(wood2Image);
   gate3.scale = 0.3

   hole1.shapeColor = "purple"
   hole1.addImage(holeImage)
   hole1.scale = 0.3

   //level 2

     obs1 = createSprite(10,70,100,5);
    obs1.shapeColor = "brown";
     obs2 = createSprite(90,40,5,80);
    obs2.shapeColor = "brown";
     obs3 = createSprite(5,110,400,5);
    obs3.shapeColor = "brown";
     obs4 = createSprite(125,67,5,80);
    obs4.shapeColor = "brown";
     obs5 = createSprite(165,20,5,100);
    obs5.shapeColor = "brown";
     obs6 = createSprite(5,110,350,5);
    obs6.shapeColor = "brown";
     obs7 = createSprite(202,70,5,80);
    obs7.shapeColor = "brown";
     obs8 = createSprite(234,30,70,5);
    obs8.shapeColor = "brown";
     obs9 = createSprite(325,30,50,5);
    obs9.shapeColor = "brown";
     obs10 = createSprite(350,52,5,50);
    obs10.shapeColor = "brown";
     obs11 = createSprite(267,139,5,218);
    obs11.shapeColor = "brown";
     
    obs12 = createSprite(350,150,100,5);
    obs12.shapeColor = "brown";
    obs13 = createSprite(350,188,5,230);
    obs13.shapeColor = "brown";
    obs14 = createSprite(249,350,302,5);
    obs14.shapeColor = "brown";
    obs15 = createSprite(373,250,50,5);
    obs15.shapeColor = "brown";
     obs16 = createSprite(325,300,50,5);
    obs16.shapeColor = "brown";
    obs17 = createSprite(300,277,5,50);
    obs17.shapeColor = "brown";
     obs18 = createSprite(250,250,105,5);
    obs18.shapeColor = "brown";
    obs19 = createSprite(200,225,5,50);
    obs19.shapeColor = "brown";
    obs20 = createSprite(150,200,105,5);
    obs20.shapeColor = "brown";
    obs21 = createSprite(100,173,5,50);
    obs21.shapeColor = "brown";
    obs22 = createSprite(50,150,105,5);
    obs22.shapeColor = "brown";
     obs23 = createSprite(250,323,5,50);
    obs23.shapeColor = "brown";
     obs24 = createSprite(200,300,105,5);
    obs24.shapeColor = "brown";
     obs25 = createSprite(150,273,5,50);
    obs25.shapeColor = "brown";
     obs26 = createSprite(100,250,104,5);
    obs26.shapeColor = "brown";
     obs27 = createSprite(50,227,5,50);
    obs27.shapeColor = "brown";
     obs28 = createSprite(26,200,53,5);
    obs28.shapeColor = "brown";
     obs29 = createSprite(100,300,5,105);
    obs29.shapeColor = "brown";
     obs30 = createSprite(50,297,5,105);
    obs30.shapeColor = "brown";
     obs31 = createSprite(26,350,53,5);
    obs31.shapeColor = "brown";

    ghostGroup = new Group();
}

function draw(){
  edges = createEdgeSprites();
   
    pacman.bounceOff(edges);
  if(keyDown ("UP_ARROW")){
       console.log("hello");     
    pacman.y = pacman.y-5
    pacman.rotation = -90
  }
  if(keyDown  ("DOWN_ARROW")){
      pacman.y = pacman.y+5
      pacman.rotation = 90
    }
  if(keyDown("RIGHT_ARROW")){
      pacman.x = pacman.x+5
      pacman.rotation = 0
    }
  if(keyDown ("LEFT_ARROW")){
      pacman.x = pacman.x-5
      pacman.rotation = -180
      
    }
    if(gameState === 0){
        background("blue")

        wall1.visible = false;
        wall2.visible = false;
        wall3.visible = false;
        wall4.visible = false;
        wall5.visible = false;
        wall6.visible = false;
        wall7.visible = false;
        wall8.visible = false;
        wall9.visible = false;
        wall10.visible = false;
        wall11.visible = false;
        wall12.visible = false;
        wall13.visible = false;
        wall14.visible = false;
        wall15.visible = false;
        wall16.visible = false;
        wall17.visible = false;
        wall18.visible = false;
        wall19.visible = false;
        wall20.visible = false;
        wall21.visible = false;
        wall22.visible = false;
        gate1.visible = false;
        gate2.visible = false;
        gate3.visible = false;
        coin1.visible = false;
        coin2.visible = false;
        coin3.visible = false;

        obs1.visible = false
        obs2.visible = false
        obs3.visible = false
        obs4.visible = false
        obs5.visible = false
        obs6.visible = false
        obs7.visible = false
        obs8.visible = false
        obs9.visible = false
        obs10.visible = false
        obs11.visible = false
        obs12.visible = false
        obs13.visible = false
        obs14.visible = false
        obs15.visible = false
        obs16.visible = false
        obs17.visible = false
        obs18.visible = false
        obs19.visible = false
        obs20.visible = false
        obs21.visible = false
        obs22.visible = false
        obs23.visible = false
        obs24.visible = false
        obs25.visible = false
        obs26.visible = false
        obs27.visible = false
        obs28.visible = false
        obs29.visible = false
        obs30.visible = false
        obs31.visible = false
        portal1.visible = false
        portal2.visible = false
        fruit1.visible = false
        fruit2.visible = false
        pacman.visible = false
        hole1.visible = false


        textSize(13)
        stroke("black")
        text ("Pacman in Adventure", 100,20)
        text("controls : move left, right, up, down using arrow keys", 50, 50)
        
    
        if(mousePressedOver (start)){
            gameState = 1
            console.log("hello")
    
        }
     }
    else if (gameState === 1){
        start.destroy();
        background ("green")
        spawnGhost();

        start.remove();
        pacman.visible = true;
        hole1.visible = true
        wall1.visible = true;
        wall2.visible = true;
        wall3.visible = true;
        wall4.visible = true;
        wall5.visible = true;
        wall6.visible = true;
        wall7.visible = true;
        wall8.visible = true;
        wall9.visible = true;
        wall10.visible = true;
        wall11.visible = true;
        wall12.visible = true;
        wall13.visible = true;
        wall14.visible = true;
        wall15.visible = true;
        wall16.visible = true;
        wall17.visible = true;
        wall18.visible = true;
        wall19.visible = true;
        wall20.visible = true;
        wall21.visible = true;
        wall22.visible = true;
        gate1.visible = true;
        gate2.visible = true;
        gate3.visible = true;
        coin1.visible = true;
        coin2.visible = true;
        coin3.visible = true;

        console.log("bye")
        
       
       
        if(pacman.isTouching(wall1)||pacman.isTouching(wall2)||pacman.isTouching(wall3)||pacman.isTouching(wall4)||pacman.isTouching(wall5)
        ||pacman.isTouching(wall6)||pacman.isTouching(wall7)||pacman.isTouching(wall8)||pacman.isTouching(wall9)||pacman.isTouching(wall10)
        ||pacman.isTouching(wall11)||pacman.isTouching(wall12)||pacman.isTouching(wall13)||pacman.isTouching(wall14)||pacman.isTouching(wall15)
        ||pacman.isTouching(wall16)||pacman.isTouching(wall17)||pacman.isTouching(wall18)||pacman.isTouching(wall19)||pacman.isTouching(wall20)
        ||pacman.isTouching(wall21)||pacman.isTouching(wall22)
        ){
            pacman.x = 20
            pacman.y = 20
        }
        
       if(ghostGroup.isTouching(pacman)){
         pacman.x = 20
         pacman.y = 20
       }
       
        if(pacman.isTouching(coin1)){
            gate1.destroy();
            coin1.destroy();
        }
        if(pacman.isTouching(coin2)){
            gate2.destroy();
            coin2.destroy();
        }
        if(pacman.isTouching(coin3)){
            gate3.destroy();
            coin3.destroy();
        }
        if(pacman.isTouching(hole1)){
           pacman.x = 20
           pacman.y = 20
           gameState = 2
           

        }
      //  //console.log(obs1);
      obs1.visible = false
      obs2.visible = false
      obs3.visible = false
      obs4.visible = false
      obs5.visible = false
      obs6.visible = false
      obs7.visible = false
      obs8.visible = false
      obs9.visible = false
      obs10.visible = false
      obs11.visible = false
      obs12.visible = false
      obs13.visible = false
      obs14.visible = false
      obs15.visible = false
      obs16.visible = false
      obs17.visible = false
      obs18.visible = false
      obs19.visible = false
      obs20.visible = false
      obs21.visible = false
      obs22.visible = false
      obs23.visible = false
      obs24.visible = false
      obs25.visible = false
      obs26.visible = false
      obs27.visible = false
      obs28.visible = false
      obs29.visible = false
      obs30.visible = false
      obs31.visible = false
      portal1.visible = false
      portal2.visible = false
      fruit1.visible = false
      fruit2.visible = false


      

        
    }
    if(gameState === 2){
        background("black")

        if(ghostGroup.isTouching(pacman)){
          pacman.x = 20
          pacman.y = 20
        }
        
        
        wall1.remove();
        wall2.remove();
        wall3.remove();
        wall4.remove();
        wall5.remove();
        wall6.remove();
        wall7.remove();
        wall8.remove();
        wall9.remove();
        wall10.remove();
        wall11.remove();
        wall12.remove();
        wall13.remove();
        wall14.remove();
        wall15.remove();
        wall16.remove();
        wall17.remove();
        wall18.remove();
        wall19.remove();
        wall20.remove();
        wall21.remove();
        wall22.remove();
        gate1.remove();
        gate2.remove();
        gate3.remove();
        coin1.remove();
        coin2.remove();
        coin3.remove();

        obs1.visible = true
      obs2.visible = true
      obs3.visible = true
      obs4.visible = true
      obs5.visible = true
      obs6.visible = true
      obs7.visible = true
      obs8.visible = true
      obs9.visible = true
      obs10.visible = true
      obs11.visible = true
      obs12.visible = true
      obs13.visible = true
      obs14.visible = true
      obs15.visible = true
      obs16.visible = true
      obs17.visible = true
      obs18.visible = true
      obs19.visible = true
      obs20.visible = true
      obs21.visible = true
      obs22.visible = true
      obs23.visible = true
      obs24.visible = true
      obs25.visible = true
      obs26.visible = true
      obs27.visible = true
      obs28.visible = true
      obs29.visible = true
      obs30.visible = true
      obs31.visible = true
      fruit1.visible = true
      fruit2.visible = true
      portal1.visible = true
      portal2.visible = true
        if(pacman.isTouching (fruit1)){
           portalKey1 = 1
           fruit1.destroy();
        }
        if(portalKey1 === 1 && pacman.isTouching(portal1)){
          pacman.x = 380
          pacman.y = 310
        }

        if(pacman.isTouching (fruit2)){
          portalKey2 = 1
          fruit2.destroy();
       }
       if(portalKey2 === 1 && pacman.isTouching(portal2)){
         pacman.x = 30
         pacman.y = 380
       }

       if(pacman.isTouching(hole1)){
         gameState = 3
       }

    }
    if (gameState === 3){
      background(youWinImage)

      obs1.remove()
      obs2.remove()
      obs3.remove()
      obs4.remove()
      obs5.remove()
      obs6.remove()
      obs7.remove()
      obs8.remove()
      obs9.remove()
      obs10.remove()
      obs11.remove()
      obs12.remove()
      obs13.remove()
      obs14.remove()
      obs15.remove()
      obs16.remove()
      obs17.remove()
      obs18.remove()
      obs19.remove()
      obs20.remove()
      obs21.remove()
      obs22.remove()
      obs23.remove()
      obs24.remove()
      obs25.remove()
      obs26.remove()
      obs27.remove()
      obs28.remove()
      obs29.remove()
      obs30.remove()
      obs31.remove()
      fruit1.remove()
      fruit2.remove()
      portal1.remove()
      portal2.remove()
      hole1.remove();
      pacman.remove()
    }
    drawSprites()
}

function spawnGhost(){
  if(frameCount % 60 === 0){
  ghost = createSprite(200,200,10,10)
  ghost.addImage(ghostImage);
  ghost.scale = 0.1
  ghost.x = Math.round(random(50,350))
  ghost.y = Math.round(random(50,350))
  ghost.lifetime = 30
  ghostGroup.add(ghost);

  }
 

}