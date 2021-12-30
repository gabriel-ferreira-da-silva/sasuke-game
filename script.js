const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width =2400;
canvas.height =1600;


ground_y=1030;
const keys = [];

const player ={

    x:50,
    y:ground_y,
    height:56,
    width:38,
    frameX:0,
    frameY:0,
    state: "stand",
    prevState:"",
    speed:120,
    moving: false
};




function drawSprite(img, sX,sY,sW,sH,dX,dY,dW,dH){
    ctx.drawImage(img, sX,sY,sW,sH,dX,dY,dW,dH);
}


window.addEventListener("keydown",function(e){
    keys[0]=e.code;
    console.log(keys);    
});

window.addEventListener("keyup",function(e){
    
    keys[0]=null;
    player.state="";
    
});



function moveSprite(){
    
    
    if(keys[0]==null){
        if( player.y < ground_y-50 ){
            player.state="falling";
            player.y+=player.speed;
        }else{
            player.y=ground_y;
            player.state="stand";
        }
    }

    if(keys[0]=="KeyA"){
        player.prevState=player.state;
        player.state="running-left";
        player.x -= player.speed;
    }
    if(keys[0]=="KeyD"){
        player,prevState=player.state;
        player.state="running";
        player.x += player.speed;
    } 
/*
    if(player.state=="jumping" && player.y < player.height*10){
        player.state="falling";
    }

    if(keys[0]=="KeyW"  && player.state!="falling" ){
        player.prevState=player.state;
        player.state="jumping";
        player.y-=player.speed;
    }
    */
}

function actionSprite(){
    if(keys[0]=="KeyK"){
        player,prevState=player.state;
        player.state="punching";
    }

}

function handlePlayerFrame(){
    selectState();
    if(player.frameX < maxFramesX-1  ) player.frameX++
    else player.frameX=0;
}


let fps, fpsInterval, startTime , now, then, elapsed;

function startAnimating(fps){
    fpsInterval=1000/fps;
    then= Date.now();
    startTime=then;
    animate();
}

function animate(){
    
    requestAnimationFrame(animate);
    now =Date.now();
    elapsed=now-then;
    if(elapsed> fpsInterval){
        then=now-(elapsed%fpsInterval);
        //ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(background,0,0,canvas.width,canvas.height);
        ctx.drawImage(ground,0,1280,canvas.width,canvas.height*0.2);
        drawSprite(playerSprite,player.width*player.frameX, player.height*player.frameY, player.width,player.height,player.x,player.y,player.width*5,player.height*5);
        handlePlayerFrame();   
        moveSprite();
        actionSprite();
        requestAnimationFrame(animate);
    }
}


startAnimating(10);
















