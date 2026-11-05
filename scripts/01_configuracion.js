use sample_mflix;

sh.enableSharding("sample_mflix");

db.movies.createIndex({ _id: "hashed" });

sh.shardCollection("sample_mflix.movies", { _id: "hashed" });

var bulk = db.movies.initializeUnorderedBulkOp();
var count = 0;

db.movies.find({ id_movie: { $exists: false } }).forEach(function(doc) {
  doc.id_movie = doc._id;
  bulk.find({ _id: doc._id }).replaceOne(doc);
  count++;
  if (count % 1000 === 0) {
    bulk.execute();
    bulk = db.movies.initializeUnorderedBulkOp();
  }
});
if (count % 1000 !== 0) {
  bulk.execute();
}

db.movies.getShardDistribution();