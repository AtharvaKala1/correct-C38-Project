class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    player1 = createSprite(380,550);
    player1.addImage("player1",player1Image);
    player1.scale = 0.25;
    player2 = createSprite(580,550);
    player2.addImage("player2",player2Image);
    player2.scale = 0.15;
    player3 = createSprite(780,550);
    player3.addImage("player3",player3Image);
    player3.scale = 0.15;
    player4 = createSprite(1000,550);
    player4.addImage("player4",player4Image);
    player4.scale = 0.15;
    players = [player1, player2, player3, player4];
    hurdle1 = createSprite(380,200);
    hurdle1.addImage("hurdle",hurdleImage);
    hurdle1.scale = 0.5;
    hurdle2 = createSprite(580,200);
    hurdle2.addImage("hurdle",hurdleImage);
    hurdle2.scale = 0.5;
    hurdle3 = createSprite(780,200);
    hurdle3.addImage("hurdle",hurdleImage);
    hurdle3.scale = 0.5;
    hurdle4 = createSprite(1000,200);
    hurdle4.addImage("hurdle",hurdleImage);
    hurdle4.scale = 0.5;
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(trackImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 375 ;
      var y ;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        //players[index-1].x = x;
        //players[index-1].y = y;

        /*if (index === player.index){
          stroke(10);
          fill("skyblue")
          ellipse(x,y,60,60);
          players[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = players[index-1].y;
        }*/
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    /*if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
    }*/
   
    drawSprites();
    textSize(25);
    fill("red")
    text("Score: "+ score, 950,50);
  }

  /*end(){
    console.log("Game Ended");
  }*/
}
