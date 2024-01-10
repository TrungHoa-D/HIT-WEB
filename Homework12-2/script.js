var birthDay = new Date("August 18, 2024 00:00:00").getTime();
var countdown = setInterval(function() {
    var currentDate = new Date().getTime();
    var timeRemaining = birthDay - currentDate;
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    document.getElementById("output").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (timeRemaining < 0) {
        var newTargetDate = new Date(targetDate);
        newTargetDate.setFullYear(newTargetDate.getFullYear() + 1);
        targetDate = newTargetDate.getTime();
        timeRemaining = targetDate - currentDate;
    }
}, 1000);

