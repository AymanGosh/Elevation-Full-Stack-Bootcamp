const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/peopleDB", { useNewUrlParser: true })
  .catch((err) => console.log(err));

//if node ^17.0
// mongoose.connect("mongodb://127.0.0.1:27017/peopleDB", {
//   useNewUrlParser: true,
// });

//Generally, we create one schema definition for each collection we want to have in our DB.
const Schema = mongoose.Schema;

// const personSchema = new Schema({
//   firstName: String,
//   lastName: String,
//   age: Number,
// });
//or
// const personSchema = new Schema({
//   firstName: { type: String, required: true },
//   lastName: String,
//   age: Number,
// });
// The possible Schema Types are:
// String – mapped to javascript String
// Number – mapped to javascript Number
// Boolean - mapped to javascript Boolean
// Array – mapped to javascript Array(object)
// Date – mapped to javascript object (date object)
// ObjectId | Oid – mapped to javascript object
// Mixed – mapped to javascript object

//Example with ObjectId:

// const userSchema = new mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId, // Using ObjectId explicitly for _id
//     username: String,
//     email: String,
//     // Other fields...
//   });

//   // Create a model based on the schema
//   const User = mongoose.model('User', userSchema);

//   // Create a new user document
//   const newUser = new User({
//     _id: mongoose.Types.ObjectId(), // Generating a new ObjectId
//     username: 'example_user',
//     email: 'user@example.com',
//     // Other fields...
//   });

//Example with Mixed:
// const dynamicSchema = new mongoose.Schema({
//     data: mongoose.Schema.Types.Mixed, // Using Mixed for a dynamic field
//     // Other fixed fields...
//   });

//   // Create a model based on the schema
//   const DynamicModel = mongoose.model('DynamicModel', dynamicSchema);

//   // Create a new document with a mixed field
//   const newDynamicDoc = new DynamicModel({
//     data: {
//       name: 'John Doe',
//       age: 30,
//       hobbies: ['hiking', 'reading'],
//       address: {
//         city: 'Example City',
//         country: 'Example Country'
//       },
//       // It can hold any type of data...
//     },
//     // Other fixed fields...
//   });

const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  address: {
    city: String,
    street: String,
    apartment: Number,
  },
});
//or
// const personSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     age: Number,
//     address : addressSchema
//   })

// Here mongoose.model creates a Person model.
// The first parameter, the string 'Person’, is our choice for the model name,
// the second argument is our personSchema
const Person = mongoose.model("person", personSchema);
//const Person = mongoose.model('person', personSchema, 'persons'); //<== persons will be the name of the collection

let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }); //purposefully ignoring the `address` field

console.log(p1);
