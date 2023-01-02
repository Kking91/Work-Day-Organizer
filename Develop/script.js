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

  // Add a click event listener for the save buttons
  $(".saveBtn").click(function() {
  // Get the value of the textarea in the same time-block as the button that was clicked
    let value = $(this).siblings(".description").val();

  // Get the hour for the time-block from the element's ID
    let hour = $(this).closest(".time-block").attr("id").split("-")[1];

  // Save the value in local storage using the hour as the key
    localStorage.setItem(hour, value);
});

 
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
$("#hour-9 .description").val(localStorage.getItem("9"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));


  
  

});

// TODO: Add code to display the current date in the header of the page.
var date = dayjs().format("ddd, MMM D, YYYY h:mm A");
$("#currentDay").text(date);