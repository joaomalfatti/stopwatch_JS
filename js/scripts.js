const MinutesE1 = document.querySelector("#minutes")
const Seconds = document.querySelector("#seconds")
const Miliseconds = document.querySelector("#miliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;