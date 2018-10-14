//simple timer using window.setInterval() and .clearInterval() method.

let sec = 0;
let min = 0;
let hour = 0;
let timeKeeper = document.querySelector('.timer');
let stop = document.querySelector('.stopTimerButton');
let reset = document.querySelector('.resetTimerButton');
let start = document.querySelector('.startTimerButton');
let intervalID = null;
let timerStopped = null;

stop.addEventListener('click', stopTimer)
reset.addEventListener('click', resetTimer)
start.addEventListener('click', startTimer)

function startTimer() {
  //this keeps the user from starting more than one interval.
  if ((hour === 0 && min === 0 && sec === 0) || timerStopped === true ){
    console.log('START!')
    timerStopped = false;
    intervalID = setInterval(function(){
      sec++
      displayTimer();
      console.log('intervalID value: ' + intervalID);
    }
    ,1000 );
  } else {
    //ignore click.
    console.log('Timer is already running.')
  }
};

//show the timer on the screen.
function displayTimer(){
  if ( sec > 0 ){
    if (sec > 60) {
      sec = 0;
      min++;
    } else if (min > 60) {
      min = 0;
      hour++;
    }
    timeKeeper.textContent = (hour ? (hour >9 ? hour : "0" + hour) : "00") + ":" + (min ? (min > 9 ? min : "0" + min) : "00") + ':' + (sec > 9 ? sec : "0" + sec);
  };
};

function resetTimer() {
  clearInterval(intervalID);
  timerStopped = true;
  hour = 0;
  min = 0;
  sec = 0;
  timeKeeper.textContent = "00:00:00";
};

function stopTimer() {
  console.log('STOP');
  clearInterval(intervalID);
  timerStopped = true;
};
