//filter
const vegetables = [
  { name: "Eggplant", color: "purple" },
  { name: "Carrot", color: "orange" },
  { name: "Squash", color: "orange" },
  { name: "Tomatoe", color: "red" },
  { name: "Onion", color: "white" },
  { name: "Sweet Potato", color: "orange" },
];

let orangeVegetables = vegetables.filter((v) => v.color === "orange");
//console.log(orangeVegetables);

//forEach
//orangeVegetables.forEach((ov) => console.log(ov.name));

//map
let poundWeights = [142, 180, 178, 121, 132];

let kiloWeights = poundWeights.map((pw) => Math.round(pw / 2.2));
//console.log(kiloWeights); //prints [65, 82, 81, 55, 60]

let users = [
  {
    name: "Leanne Graham",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: { lat: "-37.3159", lng: "81.1496" },
    },
  },
  {
    name: "Ervin Howell",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: { lat: "-43.9509", lng: "-34.4618" },
    },
  },
];
const mapUsers = users.map((u) => {
  return { name: u.name, city: u.address.city };
});
//console.log(mapUsers);

//.find()
let posts = [
  {
    id: 0,
    text: "I'm not here",
    comments: [{ id: 0, text: "support that" }],
  },
  {
    id: 1,
    text: "Find me",
    comments: [
      { id: 0, text: "here I am" },
      { id: 1, text: "rock you like a hurricane" },
      { id: 2, text: "dum dum" },
    ],
  },
  {
    id: 2,
    text: "Where's waldo anyway",
    comments: [
      { id: 0, text: "who's waldo" },
      { id: 1, text: "he's called Effi" },
    ],
  },
  {
    id: 3,
    text: "Poof",
    comments: [{ id: 0, text: "like magic" }],
  },
];
const findById = (id) => posts.find((p) => p.id === id);
console.log(findById(1)); // prints {id: 1, text: "Find me", comments: Array(3)}

const findCommentById = (postID, commentID) => {
  let post = findById(postID);
  return post.comments.find((c) => c.id == commentID);
};
console.log(findCommentById(1, 0)); // {id: 0, text: "here I am"}

//every
let ages = [31, 28, 23, 27, 25, 16, 24];
ages.every((a) => a > 18); //returns false

//some
let menu = [
  { name: "Beef stew", vegetarian: false },
  { name: "Beef sandwhich", vegetarian: false },
  { name: "Carrot on a stick", vegetarian: true },
  { name: "Beef eggroll", vegetarian: false },
];

menu.some((m) => m.vegetarian); //returns true
