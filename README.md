Práctica: Base de Datos Distribuida con MongoDB y Docker



Datos de la Materia y Equipo

\* \*\*Integrantes del Equipo:\*\*

&#x20; \* Ruben Ivan Garcia Melendez

&#x20; \* Jose Armando Castillo Navarrete





1\. Objetivo

Implementar y desplegar una arquitectura de base de datos distribuida utilizando un cluster de MongoDB fragmentado (Sharded Cluster) sobre contenedores Docker.



\---

&#x20;2. Arquitectura del Cluster

El clúster está compuesto por 5 contenedores en la red `mongo-cluster-net`:

1\. \*\*Config Server (`configsvr`):\*\* Gestiona los metadatos y la configuración del cluster (Puerto 27019).

2\. \*\*Shard 1 (`shard1`):\*\* Nodo de almacenamiento 1 (Puerto 27018).

3\. \*\*Shard 2 (`shard2`):\*\* Nodo de almacenamiento 2 (Puerto 27020).

4\. \*\*Shard 3 (`shard3`):\*\* Nodo de almacenamiento 3 (Puerto 27021).

5\. \*\*Mongos Router (`mongos`):\*\* Enrutador de consultas de la base de datos (Puerto 27017).





3\. Definición del Documento y Shard Key

\* \*\*Base de Datos:\*\* `empresa\_db`

\* \*\*Colección:\*\* `usuarios`

\* \*\*Estructura del Documento:\*\*

```json

{

&#x20; "\_id": ObjectId("..."),

&#x20; "pais": "Mexico",

&#x20; "nombre": "Carlos Mendoza",

&#x20; "email": "carlos@example.com",

&#x20; "edad": 30

}

