use("test-db");

//q1
// db.linkedon.count({
//   salary: { $gt: 25000 },
// });
//=> 231

// db.linkedon.aggregate([
//   {
//     $group: {
//       _id: "$currentPosition",
//       Count: { $sum: 1 },
//     },
//   },
// ]);
// output
/* "_id": "Senior Analyst",
    "Count": 49
  },
  {
    "_id": "Quality Assurance",
    "Count": 52
  }
  ..
  ..
  ..
  */

//q2
// db.linkedon
//   .find(
//     {},
//     {
//       firstName: 1,
//       salary: 1,
//       _id: 0,
//     }
//   )
//   .sort({ salary: -1 })
//   .limit(3);

//q3
// db.linkedon.count({
//   $and: [{ "currentCompany.name": "Walmart" }, { salary: { $gt: 7000 } }],
// });
//=>23

//q4

// db.linkedon
//   .find(
//     {
//       $or: [
//         { "currentCompany.industry": "Sales" },
//         { "currentCompany.industry": "Retail" },
//       ],
//     },
//     {
//       "currentCompany.name": 1,
//       firstName: 1,
//       lastName: 1,
//       salary: 1,
//       _id: 0,
//     }
//   )
//   .sort({ salary: -1 })
//   .limit(1);
//You should find it to be Holly Gonzales,
//working at Groupon for 20,000.

//q5
// db.linkedon.count({
//   $or: [
//     { "currentCompany.name": "Apple" },
//     { "previousCompanies.name": "Apple" },
//   ],
// });
// 325

//Extension 1
db.linkedon.aggregate([
  { $match: { "currentCompany.name": "Apple" } }, // Filter documents where company is Apple
  { $group: { _id: "$currentCompany.industry", count: { $sum: 1 } } }, // Group by industry and count
]);
/*[
  {
    "_id": "Retail",
    "count": 28
  },
  {
    "_id": "Sales",
    "count": 51
  },
  ..
]*/

//Extension 2
// db.linkedon.aggregate([
//   {
//     $match: { currentPosition: "Analyst" },
//   },
//   {
//     $group: {
//       _id: "$currentCompany.name",
//       averageSalary: { $avg: "$salary" },
//     },
//   },
// ]);

//Extension 3
// db.linkedon
//   .aggregate([
//     {
//       $match: {
//         $and: [
//           {
//             $or: [
//               { "currentCompany.name": "Google" },
//               { "currentCompany.name": "Apple" },
//             ],
//           },
//           { "currentCompany.industry": "Tech" },
//         ],
//       },
//     },
//     {
//       $group: {
//         _id: "$lastName",
//         average: { $avg: "$salary" },
//       },
//     },
//   ])
//   .sort({ average: -1 });
