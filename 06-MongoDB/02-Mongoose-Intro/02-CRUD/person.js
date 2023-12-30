const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/peopleDB", { useNewUrlParser: true })
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;
const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

const Person = mongoose.model("person", personSchema);

let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 });
let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 });
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 });
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 });
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 });

let allTheShooberts = [p2, p3, p4, p5];
//allTheShooberts.forEach((s) => s.save());

// p1.save()
//   .then(() => p2.save)
//   .then(() => {
//     mongoose.connection.close();
//   });

// Person.findById("65909d2af13a00b403de9e36").then(function (person, err) {
//   person.age += 10; //how time flies
//   person.save();
// });

// Person.findByIdAndUpdate("65909d2af13a00b403de9e36", { age: 70 }).then(
//   function (person, err) {
//     console.log(person);
//   }
// );
//To see the value of the update object in the callback, you must add the {new: true} parameter:
// Person.findByIdAndUpdate(
//   "65909d2af13a00b403de9e36",
//   { age: 70 },
//   { new: true }
// ).then(function (person) {
//   console.log(person);
// });

async function removePersonById(personId) {
  try {
    const removedPerson = await Person.findOneAndDelete({ _id: personId });
    console.log("Removed Person:", removedPerson);
  } catch (err) {
    console.error("Error:", err);
  }
}
// Call the function with the personId you want to remove
removePersonById("65909e6d3d16058f062d5f75");

// Person.find({}).then(function (people, err) {
//   console.log(people);
// });

// let peoplePromise = Person.find({});
// peoplePromise
//   .then(function (people) {
//     console.log(people);
//   })
//   .catch((err) => console.log(err));
