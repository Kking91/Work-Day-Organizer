// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't running until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
// Get the current hour
  let currentHour = dayjs().format("HH");

// Iterate over the time-block divs and add/remove the appropriate class based on the current hour
  $(".time-block").each(function() {
  // Get the hour for this time block from the element's ID
    let timeBlockHour = $(this).attr("id").split("-")[1];

  // Compare the time block hour to the current hour
   if (currentHour == timeBlockHour) {
    // If the time block hour is the same as the current hour, add the "present" class
     $(this).addClass("present");
   } else if (currentHour < timeBlockHour) {
    // If the time block hour is in the future, remove the "present" class and add the "future" class
      $(this).removeClass("present");
      $(this).addClass("future");
   } else if (currentHour > timeBlockHour) {
    // If the time block hour is in the past, remove the "present" and "future" classes and add the "past" class
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
  }
});

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  
  

});

// TODO: Add code to display the current date in the header of the page.
var date = dayjs().format("ddd, MMM D, YYYY h:mm A");
$("#currentDay").text(date);