$(".item").on("click", function () {
  if (!$(this).data().instock) return;
  const newItem = `<div class=cart-item>${$(this).html()}</div>`;
  const item = $(newItem);
  $("#cart").append(item);
});
