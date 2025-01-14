import Ball from "./Ball.js";
import Paddle from "./Paddle.js";


//insert id ball and total style in class ball
const ball =new Ball(document.getElementById('ball'));
//insert id paddle total style in class padddle
const palyerPaddle=new Paddle(document.getElementById('player-paddle'))
const computerPaddle= new Paddle(document.getElementById('computer-paddle'))

//insert  scores
const playerScoreElem=document.getElementById('player-score') 
const computerScoreElem=document.getElementById('computer-score') 

let lastTime

function update(time) {
    if(lastTime != null){
        const delta=time - lastTime
        //our ball update with delta time
       ball.update(delta ,[palyerPaddle.rect() , computerPaddle.rect()])
       computerPaddle.update(delta , ball.y)
       //change backgroundcolor every ms
       const hue=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hue'))
       document.documentElement.style.setProperty('--hue' , hue + delta * 0.01)


       if(isLose())
        handleLose()

    }

    lastTime =time
    //به مرورگر می‌گوید که می‌خواهید یک انیمیشن را اجرا کنید و از مرورگر درخواست می‌کند
    // که یک تابع مشخص را برای به‌روزرسانی یک انیمیشن قبل از رنگ‌آمیزی بعدی فراخوانی کند.
    window.requestAnimationFrame(update)
}
//if ball lose 
    function isLose(){
        //when ball get out the innerwidth or left be negetive ball is lose
        const rect=ball.rect();
        return rect.right >= window.innerWidth || rect.left<= 0
    }

    function handleLose(){
        const rect =ball .rect();
        if(rect.right >= window.innerWidth){
            //when ball out the screen from right side player win
            playerScoreElem.textContent=parseInt(playerScoreElem.textContent) + 1
        }else{
            //when ball get out the screen from left side computer win
            computerScoreElem.textContent=parseInt(computerScoreElem.textContent) + 1
        }
            //while one of player win game get restart
            ball.reset();
            computerPaddle.reset();
        }

    //we can move palyerpaddle with movemouse by this code
    document.addEventListener('mousemove' ,e =>{

        //change the player position  value with this code
        palyerPaddle.position= (e.y / window.innerHeight) * 100
    })
    window.requestAnimationFrame(update)


//!steps of js
//#1 update function bcz every ms should change the positon of ball
//#2 with move mouse playerpaddle moved
//#3 with moving ball computer paddle moved
//#4when ball get out the screen there are two position 1 player win
// 2 computer win