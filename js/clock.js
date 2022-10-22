const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    const hours = `${date.getHours()}`.padStart(2,"0");
    const minutes = `${date.getMinutes()}`.padStart(2,"0");
    const seconds = `${date.getSeconds()}`.padStart(2,"0");
    clock.innerText= `${hours}:${minutes}:${seconds}`;
}
getClock(); //즉시 시계함수 작동
setInterval(getClock,1000); // 1초뒤 1초마다 시계함수 작동