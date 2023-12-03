const enableDisplayBtn = function () {
  $("#displayButton").prop("disabled", false);
  $("#displayButton").css("cursor", "pointer");
  $("#displayButton").css("background-color", "#27ae60");
  //$("#displayButton").css("color", "#ecf0f1");
};

const disableDisplayBtn = function () {
  $("#displayButton").prop("disabled", true);
  $("#displayButton").css("cursor", "not-allowed");
  $("#displayButton").css("background-color", "#DEDEDE");
  //$("#displayButton").css("color", "red");
};
