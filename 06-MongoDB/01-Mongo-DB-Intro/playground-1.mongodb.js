// Select the database to use.
use("firstCollection");

db.firstCollection.remove({});

db.firstCollection.insert({ name: "Louise", dept: "Finance", salary: 1200 });
db.firstCollection.insert({ name: "Rayna", dept: "R&D", salary: 2300 });
db.firstCollection.insert({ name: "Soren", dept: "Finance", salary: 1500 });
db.firstCollection.insert({ name: "Loreli", dept: "Sales", salary: 800 });
db.firstCollection.insert({ name: "Milo", dept: "Sales", salary: 950 });
db.firstCollection.insert({ name: "Brendon", dept: "Finance", salary: 1100 });

db.firstCollection.aggregate([
  { $group: { _id: "$dept", totalSalaries: { $sum: "$salary" } } },
]);
