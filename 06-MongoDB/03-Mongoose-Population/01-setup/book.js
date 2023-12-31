const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/bookDB", { useNewUrlParser: true })
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;
const bookSchema = new Schema({
  title: String,
  author: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }], //reference to an array of Review documents
});
const reviewSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book" }, //reference to a Book document
  reviewText: String,
  critic: { type: Schema.Types.ObjectId, ref: "Critic" }, //reference to a Critic document
});
const criticSchema = new Schema({
  name: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }], //reference to an array of Review documents
});

const Book = mongoose.model("Book", bookSchema);
const Review = mongoose.model("Review", reviewSchema);
const Critic = mongoose.model("Critic", criticSchema);

let b1 = new Book({
  title: "Name of the Wind",
  author: "Patrick Rothfuss",
  reviews: [],
});
let c1 = new Critic({
  name: "William Jeffery",
  reviews: [],
});
let r1 = new Review({
  book: b1,
  critic: c1,
  reviewText: "Excellent Book",
});
/*
b1.reviews.push(r1);
c1.reviews.push(r1);

b1.save();
c1.save();
r1.save();
*/
Book.find({}).then(function (people, err) {
  console.log(people);
});

//Population

//Notice that only the reviewText property will populated - because we only told it to populate reviews!
Book.findOne({})
  .populate("reviews")
  .exec()
  .then(function (book) {
    console.log(book.reviews);
  });

//Nested Population
/*
in the previous example we only received the reviews - 
because that’s all populated. If we want to also get 
information about the critic of each review, we have to do 
some nested population.We have to nest because a Book only 
has a title, author, and reviews - the data about the critic 
is per review, hence we’re populating the critic of the reviews that get extracted:
*/
Book.findOne({})
  .populate({
    path: "reviews",
    populate: {
      path: "critic",
    },
  })
  .exec()
  .then(function (book) {
    console.log(JSON.stringify(book));
  });

//Multiple Population
Review.find({})
  .populate("book critic")
  .exec()
  .then(function (reviews) {
    console.log(reviews);
  });

//Populating a Single Document
Critic.findOne({}).then(function (critic) {
  //now we have a single critic
  critic.populate("reviews").then(function () {
    console.log(critic.reviews);
  });
});
