//Select dates and time 
var currentMonth = document.getElementById("current-moth"); 
var howManyDays = document.getElementById("days-since"); 
const startedCode = new Date(2022, 3, 31); 
const stringStartedCode = startedCode.toDateString()
var today = new Date();
var daysSinceMarch = Math.abs(Math.ceil((startedCode.getTime() - today.getTime())/(1000 * 3600 * 24))); 
//Using Moment.js Library to make Calendar 
currentMonth.innerHTML = "It is " + today.toDateString();  
howManyDays.textContent = "It's been "+ daysSinceMarch +" days since I started."; 


const dayName = () => 
{switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
}
var howLongSince = document.getElementById("how-long"); 
var dayToday = document.getElementById("day-name")
dayToday.textContent = 'Today is ' + dayName();





/* Mornings - Finish the Khan Academy; then from 12pm - 2pm Project Time 

function renderCalendar(){
    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    const totalMonthDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    const startWeekDay = new Date(date.getFullYear(),date.getMonth(),1).getDay();
    calendarDays.innerHTML = "";
    let totalCalendarDay = 6 * 7;
    for (let i = 0; i < totalCalendarDay; i++) {
        let day = i-startWeekDay;
        if(i <= startWeekDay){
            // adding previous month days
            calendarDays.innerHTML += `<div class='padding-day'>${prevLastDay-i}</div>`;
        }else if(i <= startWeekDay+totalMonthDay){
            // adding this month days
            date.setDate(day);
            date.setHours(0,0,0,0);           
            let dayClass = date.getTime()===today.getTime() ? 'current-day' : 'month-day';
            calendarDays.innerHTML += `<div class='${dayClass}'>${day}</div>`;
        }else{
            // adding next month days
            calendarDays.innerHTML += `<div class='padding-day'>${day-totalMonthDay}</div>`;
        }    }}
document.querySelectorAll(".soft-btn").forEach(function (element) {
	element.addEventListener("click", function () {
		date = new Date(currentMonth.textContent);
        date.setMonth(date.getMonth() + (element.classList.contains("prev") ? -1 : 1));
		currentMonth.textContent = date.toLocaleDateString("en-US", {month:'long', year:'numeric'});
		renderCalendar();
	});});
document.querySelectorAll(".btn").forEach(function (element) {
	element.addEventListener("click", function () {
        let btnClass = element.classList;
        date = new Date(currentMonth.textContent);
        if(btnClass.contains("today"))
            date = new Date();
        else if(btnClass.contains("prev-year"))
            date = new Date(date.getFullYear()-1, 0, 1);
        else
            date = new Date(date.getFullYear()+1, 0, 1);
		currentMonth.textContent = date.toLocaleDateString("en-US", {month:'long', year:'numeric'});
		renderCalendar();
	});
});
*/ 