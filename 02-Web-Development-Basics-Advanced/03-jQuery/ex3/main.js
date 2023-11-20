$("button").click(function () {
  const val = $("#my-input").val();
  $("ul").append(`<li>${val}</li>`);
  $("#my-input").val("");
  //$("#my-input").attr("placeholder", "This is a new placeholder");
});

// do not do this
// $("#myList").click("li", function () {
//   // 'this' refers to the clicked li element
//   $(this).remove(); // Removes the clicked li
//   //  $(this).hide();
// });

// do this
$("#myList").on("click", "li", function () {
  // 'this' refers to the clicked li element
  $(this).remove(); // Removes the clicked li
  //  $(this).hide();
});
