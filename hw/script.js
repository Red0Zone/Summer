const timer = document.querySelector(".timer");
const list = document.querySelectorAll(".image-container");
let color = list[0].getAttribute("data-value");
list[0].style.boxShadow = `10px 10px 20px ${color}`;
list[0].style.border = `solid 3px ${color}`;
timer.style.color = color;
let carId = 1;
let time = 1;

setTime();
let id;
function setTime() {
  id = setInterval(moveInTime, 1000);
}
function moveInTime() {
  if (time == 3) {
    time = 0;
    list.forEach((car) => {
      car.classList.remove("active");
    });
    if (carId == 5) {
      carId = 0;
    }
    color = list[carId].getAttribute("data-value");
    list[carId].classList.add("active");
    list[carId].style.boxShadow = `10px 10px 20px ${color}`;
    list[carId].style.border = `solid 3px ${color}`;
    timer.style.color = color;

    carId++;
  }
  time++;
  timer.textContent = time;
  clearInterval(id);
  setTime();
}
