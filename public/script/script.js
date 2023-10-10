let button = document.getElementById("button");

button.addEventListener("click", function () {

    let monthYear = document.getElementById("date").value.split('-');

    if (monthYear[0] !== '') {

        let year = monthYear[0];
        let month = parseInt(monthYear[1])-1;

        const getAllDaysOfMonth = require('api-calendar');
        
        const allDaysOfMonth = getAllDaysOfMonth(month, year)

        const calendar = document.getElementById("calendar")

        calendar.innerHTML = allDaysOfMonth

    }
});