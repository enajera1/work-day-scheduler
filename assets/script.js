var displayTime = document.querySelector("#currentDay");
var currentTime = moment();

displayTime.textContent = currentTime.format("dddd, MMMM Do")

$(".saveBtn").on("click", function() {
    // get row text field class and row id values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time /* aka KEY = row id */, value /* text in the textarea */);
});


$("#9am-row .description").val(localStorage.getItem("9am-row" /* localStorage KEY also the row id */));

$("#10am-row .description").val(localStorage.getItem("#10am-row"));

$("#11am-row .description").val(localStorage.getItem("11am-row"));

$("#12pm-row .description").val(localStorage.getItem("12pm-row"));

$("#1pm-row .description").val(localStorage.getItem("1pm-row"));

$("#2pm-row .description").val(localStorage.getItem("2pm-row"));

$("#3pm-row .description").val(localStorage.getItem("3pm-row"));

$("#4pm-row .description").val(localStorage.getItem("4pm-row"));


$("#5pm-row .description").val(localStorage.getItem("5pm-row"));



var hour9am = 9;
var hour10am = 10;
var hour11am = 11;
var hour12pm = 12;
var hour1pm = 13;
var hour2pm = 14;
var hour3pm = 15;
var hour4pm = 16;
var hour5pm = 17;

var currentHour = moment().format('H');


if (currentHour < hour9am) {
    $("#9am-text").addClass("future");
} else if (currentHour > hour9am) {
    $("#9am-text").addClass("past");
} else if (currentHour = hour9am) {
    $("#9am-text").addClass("present");
}

if (currentHour < hour10am) {
    $("#10am-text").addClass("future");
} else if (currentHour > hour10am) {
    $("#10am-text").addClass("past");
} else if (currentHour = hour10am) {
    $("#10am-text").addClass("present");
}

if (currentHour < hour11am) {
    $("#11am-text").addClass("future");
} else if (currentHour > hour11am) {
    $("#11am-text").addClass("past");
} else if (currentHour = hour11am) {
    $("#11am-text").addClass("present");
}

if (currentHour < hour12pm) {
    $("#12pm-text").addClass("future");
} else if (currentHour > hour12pm) {
    $("#12pm-text").addClass("past");
} else if (currentHour = hour12pm) {
    $("#12pm-text").addClass("present");
}

if (currentHour < hour1pm) {
    $("#1pm-text").addClass("future");
} else if (currentHour > hour1pm) {
    $("#1pm-text").addClass("past");
} else if (currentHour = hour1pm) {
    $("#1pm-text").addClass("present");
}

if (currentHour < hour2pm) {
    $("#2pm-text").addClass("future");
} else if (currentHour > hour2pm) {
    $("#2pm-text").addClass("past");
} else if (currentHour = hour2pm) {
    $("#2pm-text").addClass("present");
}

if (currentHour < hour3pm) {
    $("#3pm-text").addClass("future");
} else if (currentHour > hour3pm) {
    $("#3pm-text").addClass("past");
} else if (currentHour = hour3pm) {
    $("#3pm-text").addClass("present");
}

if (currentHour < hour4pm) {
    $("#4pm-text").addClass("future");
} else if (currentHour > hour4pm) {
    $("#4pm-text").addClass("past");
} else if (currentHour = hour4pm) {
    $("#4pm-text").addClass("present");
}

if (currentHour < hour5pm) {
    $("#5pm-text").addClass("future");
} else if (currentHour > hour5pm) {
    $("#5pm-text").addClass("past");
} else if (currentHour = hour5pm) {
    $("#5pm-text").addClass("present");
}