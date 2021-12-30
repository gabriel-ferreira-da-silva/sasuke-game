const playerSprite= new Image();
playerSprite.src = "sprites/running.png";
const background = new Image();
background.src = "sprites/background.webp";
const ground = new Image();
ground.src = "sprites/ground.png";

var audio = new Audio();
audio.src = "sasuke.mp3";
audio.play();

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

        case "stand":
            playerSprite.src = "sprites/stand.png";
            maxFramesX=4;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=152/maxFramesX;
        break;
}
}
