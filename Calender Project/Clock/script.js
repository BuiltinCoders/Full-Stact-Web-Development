let secondHand = document.getElementById('secondhand');
let minuteHand = document.getElementById('minutehand');
let hourHand = document.getElementById('hourhand');
let minute = document.querySelector('#minuteValue');

function updateClock(){
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    let hrPosition = (currentHour*30)+(currentMinute*1/2)+(currentSecond*1/120);
    let minPosition = (currentMinute*6)+ (currentSecond*1/10);
    let secPosition = (currentSecond*6);

    
    // rotating hour, minute and second hand position
    hourHand.style.transform = `rotate(${hrPosition}deg)`;
    minuteHand.style.transform = `rotate(${minPosition}deg)`;
    secondHand.style.transform = `rotate(${secPosition}deg)`;
    
    // Display Current Minute in Minute Hand
    if(currentMinute < 10){
        console.log(currentMinute)
        minute.innerHTML = `0${currentMinute}`;
    }
    else{
        minute.innerHTML = `${currentMinute}`;
    }
    minute.style.transform = `rotate(-${minPosition}deg)`;
}

setInterval(updateClock, 1000);

