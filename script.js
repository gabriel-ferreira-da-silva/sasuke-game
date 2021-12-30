const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width =2400;
canvas.height =2000;

ground_y=canvas.height*0.9;
const keys = [];
const jutsuKeys=[];

const AttackFrames=0;

const player ={
    x:50,
    y:ground_y*0.87,
    height:56,
    width:38,
    frameX:0,
    frameY:0,
    state: "stand",
    prevState:"",
    orientation:"right",
    speed:120,
    attackTime:0,
    frameBackground:0,
    moving: false
};


const attack ={
    x:50,
    y:ground_y,
    height:200,
    width:200,
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
    keys[e.code.toString()[3]]=true;
    if(!isNaN(parseInt(e.code.toString()[6]))){
        
        if(player.orientation=="right")playerSprite.src = "sprites/stanceFire.png"
            else playerSprite.src = "sprites/stanceFire-left.png";
            maxFramesX=3;
            maxFramesY=1;
            player.height=56/maxFramesY;
            player.width=136/maxFramesX;

        jutsuKeys.push(parseInt(e.code.toString()[6]));
        console.log(e.code.toString()[6]);  
        console.log(jutsuKeys);    
    }
    console.log(e.code.toString()[3]);
});

window.addEventListener("keyup",function(e){
    delete keys[e.code[3]];
    player.state="";
});



function moveSprite(){
    
    if(keys[0]==null){
        if(0/* player.y < ground_y-50*/ ){
            player.state="falling";
            player.y+=player.speed;
        }else{
            player.y=ground_y*0.87;
            player.state="stand";
        }
    }

    if(keys['A']){
        player.prevState=player.state;
        player.state="running-left";
        player.x -= player.speed;
        player.orientation="left";
    }
    if(keys['D']){
        player,prevState=player.state;
        player.state="running";
        player.x += player.speed;
        player.orientation="right";
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
    if(keys['K']){
        player.prevState=player.state;
        player.state="punching";
    }

    if(keys['J']){
        player.prevState=player.state;
        player.state="kicking";
    }

    if(keys['I']){
        player.prevState=player.state;
        player.state="striking";
    }
}

function jutsuSprite(){

    switch( jutsuKeys[ jutsuKeys.length - 1 ] ){
        case 1:
            sealImage.src="images/seal1.png";
            break;
        case 2:
            sealImage.src="images/seal2.png";
            break;
        case 3:
            sealImage.src="images/seal3.png";
            break;
        case 4:
            sealImage.src="images/seal4.png";
            break;
        case 5:
            sealImage.src="images/seal5.png";
            break;
        case 6:
            sealImage.src="images/seal6.png";
            break;
        case 7:
            sealImage.src="images/seal7.png";
            break;
        case 8:
            sealImage.src="images/seal8.png";
            break;
        case 9:
            sealImage.src="images/seal9.png";
            break;
        default:
            sealImage.src="";
            break
    }

    if(jutsuKeys[0]==1 &&jutsuKeys[1]==2 && jutsuKeys[2]==3){

        player.prevState=player.state;
        player.state="sparkAttack";
        player.attackTime=20;
        console.log("sprite attack !!!");
    }

    if(jutsuKeys[0]==4 &&jutsuKeys[1]==5 && jutsuKeys[2]==6){
        player.prevState=player.state;
        player.state="lightBallAttack";
        attack.state="lightBallAttack";
        player.attackTime=20;
        attack.y = player.y - player.height*5;
        attack.x = player.x - player.width*5;
        console.log("light ball attack !!!");
    }
    if(jutsuKeys[0]==1 &&jutsuKeys[1]==5 && jutsuKeys[2]==6){
        player.prevState=player.state;
        player.state="fireBallAttack";
        attack.state="fireBallAttack";
        player.attackTime=20;
        attack.y = player.y - player.height*5;
        attack.x = player.x - player.width*5;
        console.log("fire ball attack !!!");
    }


}

function handlePlayerFrame(){
    selectState();
    
    if(player.frameX < maxFramesX-1  ) player.frameX++
    else player.frameX=0;


    if(attack.frameX < 2  ) attack.frameX++
    else attack.frameX=0;

    if(player.frameBackground < 2 ) player.frameBackground++
    else player.frameBackground=0;

}

let fps, fpsInterval, startTime , now, then, elapsed;

function startAnimating(fps){
    fpsInterval=1000/fps;
    then= Date.now();
    startTime=then;
    animate();
}
let count=0;

function animate(){
    
    requestAnimationFrame(animate);
    now =Date.now();
    elapsed=now-then;
    if(elapsed> fpsInterval){
        then=now-(elapsed%fpsInterval);
        //ctx.clearRect(0,0,canvas.width, canvas.height);
        //void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        ctx.drawImage(waterfall[player.frameBackground],0,0,canvas.width,canvas.height);
        //ctx.drawImage(waterfall[player.frameBackground],0,0,341,123, 695,1410,canvas.width*0.420,canvas.height*0.4 );
        ctx.drawImage(ground,0,ground_y,canvas.width,canvas.height*0.2);
        ctx.drawImage(sealImage, 0,0,120,120,canvas.width*0.5,canvas.height*0.1,canvas.height*0.2,canvas.height*0.2 );
        
        switch(player.state){
            case "sparkAttack":
                drawSprite(attackSprite,attack.width*attack.frameX, attack.height*attack.frameY, attack.width,attack.height,player.x - player.width*6,player.y - player.height*6,player.width*17,player.height*17);
                drawSprite(playerSprite,player.width*player.frameX, player.height*player.frameY, player.width,player.height,player.x,player.y,player.width*5,player.height*5);
                if(count%2)drawSprite(attackSprite,attack.width*attack.frameX, attack.height*attack.frameY, attack.width,attack.height,player.x - player.width*5,player.y - player.height*5,player.width*17,player.height*17);
                console.log(player.attackTime);
                player.attackTime--;
                if( player.attackTime <=0 ) player.state="stand";
                break;

            case "lightBallAttack":
                drawSprite(attackSprite,attack.width*attack.frameX, attack.height*attack.frameY, attack.width,attack.height,attack.x,attack.y,player.width*15,player.height*20);
                drawSprite(playerSprite,player.width*player.frameX, player.height*player.frameY, player.width,player.height,player.x,player.y,player.width*5,player.height*5);
                    
                if(player.orientation=="right") attack.x+=attack.speed 
                else attack.x-=attack.speed ;
    
                console.log(player.attackTime);
                player.attackTime--;
                if( player.attackTime <=0 ) player.state="stand";
               break;

             case "fireBallAttack":
                drawSprite(attackSprite,attack.width*attack.frameX, attack.height*attack.frameY, attack.width,attack.height,attack.x,attack.y,player.width*15,player.height*20);
                drawSprite(playerSprite,player.width*player.frameX, player.height*player.frameY, player.width,player.height,player.x,player.y,player.width*5,player.height*5);
                
                if(player.orientation=="right") attack.x+=attack.speed 
                else attack.x-=attack.speed ;

                console.log(player.attackTime);
                player.attackTime--;
                if( player.attackTime <=0 ) player.state="stand";
                break;

            default:
                drawSprite(playerSprite,player.width*player.frameX, player.height*player.frameY, player.width,player.height,player.x,player.y,player.width*5,player.height*5);
                moveSprite();
                jutsuSprite();
                actionSprite();
                break;

        }

        requestAnimationFrame(animate);
        handlePlayerFrame();
           
        count++;
        if(count>7){
            jutsuKeys.shift();
            count=0;
        }
        while(jutsuKeys.length > 4){
            jutsuKeys.shift();
        }
    }
}        


startAnimating(14);

/*
function animate(){
        ctx.drawImage(background,0,0,canvas.width,canvas.height);
        ctx.drawImage(ground,0,1280,canvas.width,canvas.height*0.2);
        drawSprite(playerSprite,player.width*player.frameX, player.height*player.frameY, player.width,player.height,player.x,player.y,player.width*5,player.height*5);
        handlePlayerFrame();   
        moveSprite();
        actionSprite();
        requestAnimationFrame(animate);
}

animate();
*/









