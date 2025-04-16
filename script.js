var hourHand = document.querySelector('.hour-hand');
var minuteHand = document.querySelector('.minute-hand');
var secondHand = document.querySelector('.second-hand');

//For the digital
var hrD = document.querySelector(".H")
var minD = document.querySelector(".M")
var secD = document.querySelector(".S")
var ampmD = document.querySelector(".ampm")

const audio = new Audio('/assets/tick.mp3');
audio.preload = 'auto';
audio.load();

function updateClock(){
    var currentTime = new Date();
    // Getting the current time

    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();

    // mapping the time to a degree value on the analog clock

    const secondsDeg = seconds * 6; 
    //360 deg / 60 seconds = 6 rations

    const minutesDeg = minutes * 6;
    //same as minutes for 60 points per revolution

    // 360deg / 12hrs = 30 portions, and to move the hour hand 
    //along wiht the minute hand we add the ration of the the minute hand
    const hoursDeg = (hours * 30) + (minutesDeg/12); 


    // lets rotate the hands according to the values we found.
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;

    //To keep the hours 12 hour format
    let h = hours > 12 ? hours - 12: hours; 

    // if the value of mins and secs below 10 add 0 as a prefix
    let m = minutes < 10 ? "0" + minutes : ""+minutes; 
    let s = seconds < 10 ?  "0" + seconds : ""+seconds;

    // if hour is above 12 its PM and AM otherwise
    let ampm = hours > 12 ? "PM" : "AM"; 

    hrD.innerHTML = h + ": ";
    minD.innerHTML = m + ": ";
    secD.innerHTML = s;
    ampmD.innerHTML = ampm
    audio.play();
}

//Update the clock every 1000ms / 1sec
setInterval(updateClock, 1000);

document.addEventListener('DOMContentLoaded', () => {
    updateClock();
})