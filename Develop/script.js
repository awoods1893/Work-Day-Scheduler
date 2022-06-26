$(document).ready(function () {

    var init = false;
    // Date format for the top of the page: Day, Month Date, Year Time (12 hour format)
    var today = moment().format('LLLL'); 

    let now24 = moment().format('H'); // 12 hour clock format
    let now12 = moment().format('h'); // 24 hour clock format
    if (init) {
        now24 = 13;
        now12 = 1;
    }

    // Displays current date
    const currentDate = $('#currentDay');
    currentDate.text(today);

    var calendar = new Date(); // init date and time
    var currentTime = calendar.getHours(); // returns 0-23 on a 24 hour clock

    //color coding for past, present and future times.
    for (var i = 8; i < 18; i++) {
        if (i < currenttime) {
            document.getElementById(i.toString()).classList.add('past');
        } else if (i === currenttime) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > currenttime) {
            document.getElementById(i.toString()).classList.add('future');
        }
    }
