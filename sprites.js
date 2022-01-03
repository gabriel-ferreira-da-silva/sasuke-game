const playerSprite= new Image();
playerSprite.src = "sprites/running.png";
const background = new Image();
background.src = "sprites/background.webp";
const ground = new Image();
ground.src = "sprites/ground.png";
const attackSprite = new Image();
attackSprite.src = "sprites/sparkEffect.png";
const sealImage = new Image();
const effect = new Audio("music/jutsu.wav");
const poder = new Audio("music/spark.mp3");
const poder2 = new Audio("music/poder2.mp3");
const fireball = new Audio("music/fireball.mp3");
const fireball2 = new Audio("music/fireball2.mp3");
const track = new Audio("music/sasuke.mp3");





const waterfall1 = new Image();
const waterfall2 = new Image();
const waterfall3 = new Image();
waterfall1.src = "sprites/waterfall1.png";
waterfall2.src = "sprites/waterfall2.png";
waterfall3.src = "sprites/waterfall3.png";
const waterfall = new Array(waterfall1,waterfall2, waterfall3);

function selectState(){
    switch( player.state){
        case "running":
            playerSprite.src = "sprites/running.png";
            maxFramesX=8;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=456/maxFramesX;

        break;
        case "running-left":
            playerSprite.src = "sprites/running-left.png";
            maxFramesX=8;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=456/maxFramesX;

        break;
        case "jumping":
            playerSprite.src = "sprites/jumping.png";
            if(player.orientation=="left")playerSprite.src = "sprites/jumping-left.png";
            maxFramesX=2;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=100/maxFramesX;
        break;
        case "falling":
            playerSprite.src = "sprites/jumping.png";
            if(player.orientation=="left")playerSprite.src = "sprites/jumping-left.png";
            maxFramesX=2;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=100/maxFramesX;
        break;
        case "punching":
            if(player.orientation=="right")playerSprite.src = "sprites/punch.png"
            else playerSprite.src = "sprites/punch-left.png";
            maxFramesX=3;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=233/maxFramesX;
        break;

        case "kicking":
            maxFramesX=4;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=240/maxFramesX;
            if(player.orientation=="right"){playerSprite.src = "sprites/kicking.png";}
            else{
                playerSprite.src = "sprites/kicking-left.png";
                
            }
            
        break;

        case "striking":
            maxFramesX=3;
            maxFramesY=1;
            //frameLimit=maxFramesX-1;
            if(player.orientation=="right"){
                playerSprite.src = "sprites/strike.png";
                /*player.frameLimit=maxFramesX-1;
                player.frameInitial=0;
                player.frameIncrement=1;*/
            }
            else{ 
                playerSprite.src = "sprites/strike-left.png";
                console.log("wait for correction!!")
                //player.x-=(110);
                //player.correction=(110);
                /*player.frameLimit=0;
                player.frameInitial=maxFramesX-1;
                player.frameIncrement=-1;
                /*player.x-=player.width;*/}
            player.height=56/maxFramesY;
            player.width=330/maxFramesX;
            
        break;

        case "sparkAttack":

            
            playerSprite.src = "sprites/spark.png";
            attackSprite.src="sprites/sparkEffect.png"
            maxFramesX=3;
            maxFramesY=1;
            
            player.height=56/maxFramesY;
            player.width=189/maxFramesX;
            attack.height=142/1;
            attack.width=300/2;
        break;

        case "lightBallAttack": 
            if(player.orientation=="right")playerSprite.src = "sprites/stance.png"
            else playerSprite.src = "sprites/stance-left.png";
            maxFramesX=2;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=110/maxFramesX;
            attackSprite.src = "sprites/lightBall.png";
            attack.height=142/1;
            attack.width=230/3;
            
        break;

         case "fireBallAttack": 
            player.attacking=true;
            if(player.orientation=="right")playerSprite.src = "sprites/stanceFire.png"
            else playerSprite.src = "sprites/stanceFire-left.png";
            maxFramesX=3;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=136/maxFramesX;
            if(player.orientation=="right")attackSprite.src = "sprites/fireball.png"
            else attackSprite.src = "sprites/fireball-left.png";
            attack.orientation=player.orientation;
            attack.height=154/1;
            attack.width=920/6;
            
        break;

        case "stand":
            player.attacking=false;
            poder.pause();
	        poder.currentTime=0;
            poder2.pause();
	        poder2.currentTime=0;	    
            fireball.pause();
	        fireball.currentTime=0;	    
            fireball2.pause();
            maxFramesX=4;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=152/maxFramesX;
            //player.x+=player.correction;
            //player.correction=0;
            
            if(player.orientation=="right")playerSprite.src = "sprites/stand.png"
            else playerSprite.src = "sprites/stand-left.png";

        break;
    }

    switch( attack.state){
        
        case "lightBallAttack":
            
        break;

    }
}
