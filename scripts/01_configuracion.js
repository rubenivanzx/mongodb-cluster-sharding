rs.initiate({ _id: "configReplSet", configsvr: true, members: [{ _id: 0, host: "configsvr:27019" }] });
rs.initiate({ _id: "shard1ReplSet", members: [{ _id: 0, host: "shard1:27018" }] });
rs.initiate({ _id: "shard2ReplSet", members: [{ _id: 0, host: "shard2:27020" }] });
rs.initiate({ _id: "shard3ReplSet", members: [{ _id: 0, host: "shard3:27021" }] });

sh.addShard("shard1ReplSet/shard1:27018");
sh.addShard("shard2ReplSet/shard2:27020");
sh.addShard("shard3ReplSet/shard3:27021");

sh.enableSharding("empresa_db");
use empresa_db;
db.usuarios.createIndex({ pais: 1, _id: 1 });
sh.shardCollection("empresa_db.usuarios", { pais: 1, _id: 1 });

sh.enableSharding("sample_mflix");
use sample_mflix;
db.movies.createIndex({ id_movie: "hashed" });
sh.shardCollection("sample_mflix.movies", { id_movie: "hashed" });