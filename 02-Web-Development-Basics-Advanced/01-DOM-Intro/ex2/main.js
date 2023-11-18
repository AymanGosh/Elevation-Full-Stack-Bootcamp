const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const checkReservation = function () {
  const value = document.getElementById("fname").value;
  if (reservations[value]) {
    if (reservations[value].claimed) {
      document.getElementById("msg").innerHTML =
        "Hmm, someone already claimed this reservation";
    } else {
      document.getElementById("msg").innerHTML = "Welcome, " + value;
    }
  } else {
    document.getElementById("msg").innerHTML = "You have no reservation";
  }
};
