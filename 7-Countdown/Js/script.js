const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4")

let furtureDate = new Date(2023, 7, 4, 11, 30, 0);
console.log(furtureDate);

const year = furtureDate.getFullYear()
const hours = furtureDate.getHours();
const minutes = hours.getMinutes();

let month = furtureDate.getMonth();
month = months[month]

const weekday = weekdays[furtureDate.getDay()];

giveaway.textContent = ` giveaway ends on ${weekday}, ${month} ${year} ${hours}: ${minutes} am`;


const futureTime  = furtureDate.getTime();

// function  getReamingTime(){
// const today = new Date().getTime();
// const t = futureTime - today;

// // 1s = 1000ms
// // 1m = 60s
// // 1hr = 60m
// // 1d = 24hr
// // values in miliseconds
// const oneDay = 24 * 60 * 60 * 1000;
// const oneHour = 60 * 60 * 1000;
// const oneMinute = 60 * 1000;
// // calculate all values
// let days = t / oneDay;
// days = Math.floor(days);
// let hours = Math.floor((t % oneDay) / oneHour);
// let minutes = Math.floor((t % oneHour) / oneMinute);
// let seconds = Math.floor((t % oneMinute) / 1000);

// // set values array
// const values = [days, hours, minutes, seconds];
// function format(item) {
//   if (item < 10) {
//     return (item = `0${item}`);
//   }
//   return item;
// }

// items.forEach(function (item, index) {
//   item.innerHTML = format(values[index]);
// });

// if (t < 0) {
//   clearInterval(countdown);
//   deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
// }
// }
// // countdown;
// let countdown = setInterval(getRemaindingTime, 1000);
// //set initial values
// getRemaindingTime();
