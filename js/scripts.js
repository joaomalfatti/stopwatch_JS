const minutesE1 = document.querySelector("#minutes")
const secondsE1 = document.querySelector("#seconds")
const millisecondsE1 = document.querySelector("#milliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);

function startTimer() {
    interval = setInterval(() => {
      if (!isPaused){
        milliseconds += 10

        if(milliseconds === 1000) {
          seconds++;
          milliseconds = 0;
        }
        if (seconds === 60) {
          minutes++;
          seconds = 0;
        }
        minutesE1.textContent = formatTime(minutes);
        secondsE1.textContent = formatTime(seconds);
        millisecondsE1.textContent = formatMilliseconds(milliseconds);
      }
    }, 10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function formatTime(time) {
  return time < 10 ? `0${time}`: time;
}

function formatMilliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}