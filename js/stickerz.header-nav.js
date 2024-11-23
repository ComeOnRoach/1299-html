const clock = document.querySelector(".clock");
const updateClockTime = () => (clock.innerText = new Date().toLocaleTimeString("ln"));
setInterval(updateClockTime, 1000);
