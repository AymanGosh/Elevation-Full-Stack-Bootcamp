function fetchPieceData() {
  let input = $("#piece-input").val();
  $.get(`/priceCheck/${input}`).then((data) => {
    $("body").append(`
    <div>
        price:${data.price}
    </div>
    `);
  });
}

function fetchBuyPiece() {
  let input = $("#buy-piece").val();
  $.get(`/buy/${input}`).then((data) => {
    const { name, price, inventory } = data;
    $("body").append(`
    <div>
      Congratulations, you’ve just bought ${name} for ${price}. There are ${inventory} left now in the store.
    </div>
    `);
  });
}
