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

sh.status();