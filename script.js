let timerID;
const buttonPlay = document.querySelector('#reading'); 
buttonPlay.addEventListener("click", function() {
    timerID = setInterval(calculateTime, 1000);
})


function startCountOne(){

    const timer = 1;
    let amountTime = timer*60;
    
    function calculateTime(){
    
        
    
        let minutes = Math.floor (amountTime/60);
        let seconds = amountTime%60;
    
        if ( seconds<10){seconds = "0"+seconds}
    
        readingTime.textContent = `${minutes}:${seconds}`;
        amountTime--;
    
        if (amountTime<0) {
            stopTimer();
            amountTime = 0;
            startCountTwo();
        }
        
        function stopTimer(){
            clearInterval(timerID);
        } 

function startCountTwo(){
    const header = document.querySelector (`h1`);
    header.textContent = `and now let's discuss`;
    header.classList.add (`discuss`);

    const timer = 15;
let amountTime = timer*60;

function calculateTime(){

    const discussionTime= document.querySelector(`#countdownTwo`);

    let minutes = Math.floor (amountTime/60);
    let seconds = amountTime%60;

    if ( seconds<10){seconds = "0"+seconds}

    discussionTime.textContent = `${minutes}:${seconds}`;
    amountTime--;

    if (amountTime<0) {
        stopTimer();
        amountTime = 0;
    }
    
    function stopTimer(){
        clearInterval(timerID);
    } 

}

let timerId = setInterval(calculateTime,1000);

}
    
    }
    
    let timerId = setInterval(calculateTime,1000);

}


const btn = document.querySelector (`#soundBtn`);
const audio = document.querySelector (`#player`);

btn.addEventListener (`click`, function () {


    if (audio.paused) {
        audio.play();
        btn.classList.toggle (`pause`);

        
    }
    else {
        audio.pause();
        btn.classList.toggle(`pause`);
        
    }

});