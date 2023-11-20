$("#box1").addClass("box1");
$("#box2").addClass("box2");

$("#my-input").val("Terabyte");

const ex = $("p").data().ex;
const code = $("p").data().code;

console.log(ex, code);

const clicked = function () {
  alert("clicked!");
};

$("button").click(clicked);

$("#box1").hover(function () {
  $("#box1").css("background-color", "green");
});

$("#box1").on("mouseout", function () {
  $("#box1").css("background-color", "red");
});

$("#submit").click(function () {
  alert($("#my-input2").val());
});

$(".box").click(function () {
  $(this).css("background-color", "blue");
});
