$(document).ready(function () {

    var initialize = false;
    // Date format for the top of the page: Day, Month Date, Year Time (12 hour format)
    var today = moment().format('LLLL'); 

    let today24h = moment().format('H'); // 12 hour clock format
    let today12h = moment().format('h'); // 24 hour clock format
    if (initialize) {
        today24h = 13;
        today12h = 1;
    }

    // Displays current date
    const currentDate = $('#currentDay');
    currentDate.text(today);

    var calendar = new Date(); // init date and time
    var currentTime = calendar.getHours(); // returns 0-23 on a 24 hour clock


    //color coding for past, present and future times.
    for (var i = 8; i < 18; i++) {
    if (i < currentTime) {
        document.getElementById(i.toString()).classList.add('past');
    } else if (i === currentTime) {
        document.getElementById(i.toString()).classList.add('present');
    } else if (i > currenTime) {
        document.getElementById(i.toString()).classList.add('future');
    }
    }
    
//Save Button and Keep on refresh (local storage)
{
    $('.saveBtn').click(function () 
    {
    var hour8am = document.getElementById('8').value; localStorage.setItem('text8', hour8am);
	var hour9am = document.getElementById('9').value; localStorage.setItem('text9', hour9am);
	var hour10am = document.getElementById('10').value; localStorage.setItem('text10', hour10am);
	var hour11am = document.getElementById('11').value; localStorage.setItem('text11', hour11am);
	var hour12pm = document.getElementById('12').value; localStorage.setItem('text12', hour12pm);
	var hour1pm = document.getElementById('13').value; localStorage.setItem('text13', hour1pm);
	var hour2pm = document.getElementById('14').value; localStorage.setItem('text14', hour2pm);
	var hour3pm = document.getElementById('15').value; localStorage.setItem('text15', hour3pm);
	var hour4pm = document.getElementById('16').value; localStorage.setItem('text16', hour4pm);
	var hour5pm = document.getElementById('17').value; localStorage.setItem('text17', hour5pm);
        });
     }
//Keeps the user input on the page even after the page is refreshed
    var savedItem8 = localStorage.getItem('text8'); document.getElementById('8').value = savedItem8;
    var savedItem9 = localStorage.getItem('text9'); document.getElementById('9').value = savedItem9;
    var savedItem10 = localStorage.getItem('text10'); document.getElementById('10').value = savedItem10;
    var savedItem11 = localStorage.getItem('text11'); document.getElementById('11').value = savedItem11;
    var savedItem12 = localStorage.getItem('text12'); document.getElementById('12').value = savedItem12;
    var savedItem13 = localStorage.getItem('text13'); document.getElementById('13').value = savedItem13;
    var savedItem14 = localStorage.getItem('text14'); document.getElementById('14').value = savedItem14;
    var savedItem15 = localStorage.getItem('text15'); document.getElementById('15').value = savedItem15;
    var savedItem16 = localStorage.getItem('text16'); document.getElementById('16').value = savedItem16;
    var savedItem17 = localStorage.getItem('text17'); document.getElementById('17').value = savedItem17;
     });