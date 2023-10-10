(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const getAllDaysOfMonth = (month, year) => {

    // Récupère le jour du 1er : 0 = dimanche
    let firstDay = new Date(year, month, 1).getDay()

    // Récupère le dernier jour du mois 
    let totalDay = new Date(year, month+1, 0).getDate()

    let tableHtml = `<table>  
                        <thead> 
                            <tr> 
                                <th>Sun</th> 
                                <th>Mon</th> 
                                <th>Tue</th> 
                                <th>Wed</th> 
                                <th>Thu</th> 
                                <th>Fri</th> 
                                <th>Sat</th>    
                            </tr> 
                        </thead>
                        <tbody >
                            <tr>`;

    for (let i = 1 ; i <= totalDay + firstDay ; i++) {

        if (i - 1 >= firstDay) {
            tableHtml += `<td>${i - firstDay}</td>`;
        } else {
            tableHtml += '<td></td>';
        }

        if (i % 7 === 0) {
            tableHtml += '</tr>';
        } 
        
    }

    tableHtml += '</tbody></table>';

    return tableHtml;
}

module.exports = getAllDaysOfMonth;

},{}],2:[function(require,module,exports){
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
},{"api-calendar":1}]},{},[2]);
