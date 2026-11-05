use empresa_db;

db.usuarios.insertMany([
  { pais: "Mexico", nombre: "Carlos Mendoza", email: "carlos@example.com", edad: 30 },
  { pais: "Colombia", nombre: "Sofia López", email: "sofia@example.com", edad: 25 },
  { pais: "España", nombre: "Mateo Hernández", email: "mateo@example.com", edad: 40 },
  { pais: "Mexico", nombre: "Lucía Torres", email: "lucia@example.com", edad: 22 }
]);

db.usuarios.find();
db.usuarios.find({ pais: "Mexico" });

db.usuarios.updateOne(
  { pais: "Mexico", nombre: "Carlos Mendoza" },
  { $set: { edad: 31, email: "carlos_updated@example.com" } }
);

db.usuarios.deleteOne({ pais: "Colombia", nombre: "Sofia López" });

use sample_mflix;

db.movies.insertMany([
  { id_movie: 101, title: "Inception", year: 2010, genres: ["Action", "Sci-Fi"] },
  { id_movie: 102, title: "The Dark Knight", year: 2008, genres: ["Action", "Crime"] },
  { id_movie: 103, title: "Interstellar", year: 2014, genres: ["Adventure", "Drama"] },
  { id_movie: 104, title: "Pulp Fiction", year: 1994, genres: ["Crime", "Drama"] },
  { id_movie: 105, title: "The Matrix", year: 1999, genres: ["Action", "Sci-Fi"] },
  { id_movie: 106, title: "Forrest Gump", year: 1994, genres: ["Drama", "Romance"] }
]);

db.movies.getShardDistribution();

db.movies.find({ id_movie: 101 });
db.movies.find({ year: { $gte: 2000 } });

db.movies.updateOne(
  { id_movie: 101 },
  { $set: { rating: 8.8, updated: true } }
);

db.movies.deleteOne({ id_movie: 106 });

db.movies.getShardDistribution();
sh.status();