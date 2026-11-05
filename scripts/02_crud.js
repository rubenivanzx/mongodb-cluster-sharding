use sample_mflix;

db.movies.insertOne({
  id_movie: new ObjectId(),
  title: "Pelicula Prueba Sharding",
  year: 2026,
  genres: ["Sci-Fi", "Action"],
  plot: "Prueba de insercion en cluster fragmentado"
});

print("--- Distribucion tras CREATE ---");
db.movies.getShardDistribution();


db.movies.find({ title: "Pelicula Prueba Sharding" });

print("--- Distribucion tras READ ---");
db.movies.getShardDistribution();

db.movies.updateMany(
  { title: "Pelicula Prueba Sharding" },
  { $set: { year: 2026, rated: "PG-13" } }
);

print("--- Distribucion tras UPDATE ---");
db.movies.getShardDistribution();



db.movies.deleteMany({ title: "Pelicula Prueba Sharding" });

print("--- Distribucion tras DELETE ---");
db.movies.getShardDistribution();