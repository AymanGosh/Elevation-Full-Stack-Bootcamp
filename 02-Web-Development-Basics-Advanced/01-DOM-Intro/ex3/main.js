// Get the container
const container = document.getElementById("container");

// Define the number of boxes you want
const numberOfBoxes = 20;

const getRandomColor = function () {
  const niceColors = [
    "#8e44ad",
    "#3498db",
    "#c0392b",
    "#f1c40f",
    "#d35400",
    "#2ecc71",
    "#1abc9c",
    "#2c3e50",
    "#7f8c8d",
  ];

  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
};

// Function to change box color on hover
function changeColor(event) {
  event.target.style.backgroundColor = getRandomColor();
}

// Loop to create boxes and add event listeners
for (let i = 0; i < numberOfBoxes; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.addEventListener("mouseenter", changeColor);
  container.appendChild(box);
}
