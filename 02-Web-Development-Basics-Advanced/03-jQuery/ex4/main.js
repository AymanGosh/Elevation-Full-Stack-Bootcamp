const box1 = "<div id='b1' class='box'> </div>";
const elem1 = $(box1);
const box2 = "<div id='b2' class='box'> </div>";
const elem2 = $(box2);
$("body").append(elem1);
$("body").append(elem2);

const mouseenter = function () {
  const secondBoxId = this.id === "b1" ? "b2" : "b1";
  $(`#${secondBoxId}`).css("background-color", "red");
};

const mouseleave = function () {
  const secondBoxId = this.id === "b1" ? "b2" : "b1";
  $(`#${secondBoxId}`).css("background-color", "#8e44ad");
};

$(".box").hover(mouseenter, mouseleave);
