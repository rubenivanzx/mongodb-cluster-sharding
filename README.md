# Proyecto: Base de Datos Distribuidas con MongoDB Sharding y Docker

**Asignatura:** Bases de Datos Avanzadas  
**Profesor:** José Saúl de Lira Miramontes  

**Integrantes:**
* Jose Armando Castillo Navarrete — *Matrícula: 385509*
* Ruben Ivan Garcia Melendez — *Matrícula: 385508*

---

## 1. Objetivo
Implementar soluciones para Bases de Datos Distribuidas mediante la configuración de un clúster de MongoDB en Sharding sobre contenedores de Docker, ejecutando operaciones CRUD distribuidas y monitoreando el balanceo de carga entre shards.

---

## 2. Arquitectura del Clúster (Docker Compose)
El clúster fue configurado sobre Docker utilizando la siguiente estructura de nodos:

* **Router (`mongos`):** Punto de entrada único para las peticiones de los clientes.
* **Servidor de Configuración (`configsvr`):** Mantiene los metadatos y la ubicación de los chunks en el clúster.
* **Shards (`shard1`, `shard2`, `shard3`):** Tres nodos configurados con **Replica Set** para almacenamiento fragmentado de datos y alta disponibilidad.

### Configuración del `docker-compose.yml`
```yaml
version: '3.8'

services:
  # Config Server
  configsvr:
    image: mongo:latest
    container_name: configsvr
    command: mongod --configsvr --replSet configReplSet --port 27019 --bind_ip_all

  # Shards
  shard1:
    image: mongo:latest
    container_name: shard1
    command: mongod --shardsvr --replSet shard1ReplSet --port 27018 --bind_ip_all

  shard2:
    image: mongo:latest
    container_name: shard2
    command: mongod --shardsvr --replSet shard2ReplSet --port 27018 --bind_ip_all

  shard3:
    image: mongo:latest
    container_name: shard3
    command: mongod --shardsvr --replSet shard3ReplSet --port 27018 --bind_ip_all

  # Router
  mongos:
    image: mongo:latest
    container_name: mongos
    command: mongos --configdb configReplSet/configsvr:27019 --bind_ip_all --port 27017
    ports:
      - "27017:27017"

