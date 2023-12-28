
use('test-db');

db.linkedon.find({}) //or whichever operation

//db.linkedon.countDocuments({ salary: { $gt: 25000 } })

db.linkedon.find(
    { },
    { firstName: 1, salary: 1, _id: 1 } // Projection to include only firstName and salary
  )
  .sort({ salary: -1 }) // Sort by salary in descending order
  .limit(3) // Limit to top 3 earners
  
  db.linkedon.countDocuments({
    "currentCompany.name": "Walmart",
    "salary": { $gte: 7000 }
  })
  



  