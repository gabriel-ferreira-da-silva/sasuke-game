const playerSprite= new Image();
playerSprite.src = "sprites/running.png";
const background = new Image();
background.src = "sprites/background.webp";
const ground = new Image();
ground.src = "sprites/ground.png";
const attackSprite = new Image();
attackSprite.src = "sprites/sparkEffect.png";
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
            maxFramesX=8;
            maxFramesY=1;
            player.height=72/maxFramesY;
            player.width=408/maxFramesX;
        break;
        case "falling":
            playerSprite.src = "sprites/jumping.png";
            maxFramesX=8;
            maxFramesY=1;
            player.height=72/maxFramesY;
            player.width=408/maxFramesX;
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
            if(player.orientation=="right")playerSprite.src = "sprites/kicking.png"
            else playerSprite.src = "sprites/kicking-left.png";
            maxFramesX=4;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=240/maxFramesX;
        break;

        case "striking":
            if(player.orientation=="right")playerSprite.src = "sprites/strike.png"
            else playerSprite.src = "sprites/strike-left.png";
            maxFramesX=3;
            maxFramesY=1;
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
            if(player.orientation=="right")playerSprite.src = "sprites/stanceFire.png"
            else playerSprite.src = "sprites/stanceFire-left.png";
            maxFramesX=3;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=136/maxFramesX;
            if(player.orientation=="right")attackSprite.src = "sprites/fireball.png"
            else attackSprite.src = "sprites/fireball-left.png";
            attack.height=154/1;
            attack.width=920/6;
            
        break;

        case "stand":
            if(player.orientation=="right")playerSprite.src = "sprites/stand.png"
            else playerSprite.src = "sprites/stand-left.png";
            maxFramesX=4;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=152/maxFramesX;
        break;
    }

    switch( attack.state){
        
        case "lightBallAttack":
            
        break;

    }
}
