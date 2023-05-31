
const btnStart = document.querySelector(".start")
const btnPause = document.querySelector(".pause")
const btnReset = document.querySelector(".reset")
const clock = document.querySelector(".clock")



btnStart.addEventListener('click', () => {
    const clock = document.querySelector(".clock");
    let clockNumber = 0;
    clock.innerHTML = formatTime(clockNumber);
    
    const interval = setInterval(() => {
        clockNumber++;
        clock.innerHTML = formatTime(clockNumber);
    }, 1000);
    
    btnPause.addEventListener('click', () => {
        clearInterval(interval);
    });
    
    btnReset.addEventListener('click', () => {
        clearInterval(interval);
        clockNumber = 0;
        clock.innerHTML = formatTime(clockNumber);
    });
});

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

function padZero(number) {
    return number.toString().padStart(2, '0');
}





/*  DISPLAY CURRENT TIME


btnStart.addEventListener('click', () => {
    console.log(clock)
    update();
    setInterval(update, 1000);
})

function update() {
    let date = new Date();
    clock.innerHTML = formatTime(date);
  
    function formatTime(date) {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let amOrPm = hours >= 12 ? "pm" : "am";
  
      hours = hours % 12 || 12;
  
      hours = formatZeros(hours);
      minutes = formatZeros(minutes);
      seconds = formatZeros(seconds);
  
      return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }
    function formatZeros(time) {
      time = time.toString();
      return time.length < 2 ? "0" + time : time;
    }
  }

  */