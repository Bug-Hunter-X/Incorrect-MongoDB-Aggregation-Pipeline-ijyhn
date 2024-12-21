```javascript
// Corrected aggregation pipeline
db.collection.aggregate([
  {
    $match: { /* filter criteria */ }
  },
  {
    $group: {
      _id: "$field",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 10
  }
]).toArray(function(err, results){
    if (err) throw err;
    console.log(results);
});

//Example using a specific collection and field:
//db.myCollection.aggregate([
//  {$match: {status: "active"}},
//  {$group:{_id: "$customerID", totalPurchases:{$sum:1}}},
//  {$sort: {totalPurchases:-1}},
//  {$limit:10}
//])
```