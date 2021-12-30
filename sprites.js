const playerSprite= new Image();
playerSprite.src = "sprites/running.png";
const background = new Image();
background.src = "sprites/background.webp";
const ground = new Image();
ground.src = "sprites/ground.png";
const attackSprite = new Image();
attackSprite.src = "sprites/sparkEffect.png";

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
            playerSprite.src = "sprites/punch.png";
            maxFramesX=3;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=233/maxFramesX;
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
            playerSprite.src = "sprites/stance.png";
            maxFramesX=2;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=110/maxFramesX;
            attackSprite.src = "sprites/lightBall.png";
            attack.height=142/1;
            attack.width=230/3;
            
        break;

        case "stand":
            playerSprite.src = "sprites/stand.png";
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
