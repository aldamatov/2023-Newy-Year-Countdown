const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');


const newYears = '1 Jan 2023';


function countdown(){
    //Selecting Future Date and Current
    const newYearsDate = new Date(newYears);
    const currentDate = new Date(); 

    //Calculating Days, Hours, Minutes and Seconds
    const totalSec = (newYearsDate - currentDate) / 1000;

    const day = Math.floor(totalSec / 3600 / 24);

    const hours = Math.floor(totalSec / 3600) % 24;

    const minutes = Math.floor(totalSec / 60) % 60;

    const seconds = Math.floor(totalSec) % 60;


    //Assigning Values to spans

    daysEl.innerHTML = day;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time){
    return time < 10 ? (`0${time}`): time;
}


//Initial Call 
countdown();
setInterval(countdown, 1000);