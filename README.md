# [Nodejs y Prisma ORM Christmas Giveaway API]("https://www.youtube.com/watch?v=-PHi1w1elxU&ab_channel=FaztCode")

Este repositorio contiene el código fuente para un sistema de sorteo de Navidad donde los participantes pueden inscribirse desde un frontend web. La aplicación utiliza una base de datos para almacenar la información de los participantes y facilitar el proceso de selección del ganador.

### Características
- Inscripción de Participantes: Permite que los usuarios se inscriban fácilmente proporcionando su información básica.

- Base de Datos Centralizada: Utiliza una base de datos para almacenar de manera segura la información de los participantes, facilitando la gestión y consulta de datos.

- Selección Aleatoria de Ganador: Implementa un algoritmo de selección aleatoria para elegir al ganador del sorteo entre los participantes inscritos.

### Prerequisitos

- Nesesitas Node.js v16.13.0
- Extencion `Prisma` para vscode, provee autocompletado, formato, autocompletado y resaltado de codigo para el archivo `achema.prisma`.
- Extencion SQLite Viewer, para ver las bases de datos.

## Instalacion

- Prisma es un modulo y se instala como dependencia de desarrolo

```
npm i prisma --save-dev
  or
npm i prisma -D
```

## Initialize

Finalmente, configure Prisma con el comando init de Prisma CLI:

```
npx prisma init --datasource-provider sqlite
  or
npx prisma init
 ```

Próximos pasos:
1. Configure DATABASE_URL en el archivo .env para que apunte a su base de datos existente.
2. Configure el proveedor del bloque de fuente de datos en `esquema.prisma` para que coincida con su base de datos: postgresql, mysql, sqlite, sqlserver,
 mongodb o cucarachadb (crea las tablas).

3. Ejecute una migración para crear las tablas de su base de datos con Prisma Migrate
En este punto, tiene un esquema Prisma pero aún no tiene una base de datos. Ejecute el siguiente comando en su terminal para crear la base de datos SQLite y las tablas Usuario y Publicación representadas por sus modelos:

```
npx prisma migrate dev --name dbname
  or
npx prisma migrate dev
```


Nota: Cuando realizo cambios en mi base de datos debo de volver a ejecutar una migracion.

## Uso de la Base de datos

Para usar o hacer consultas a la base de datos generado con prisma primero se debe de importar el modulo `CLI` de prisma:

```
import { PrismaClient } from "@prisma/client"; 
```

Esta clase crea una coneccion hacia la base de datos desde el server.

### Tambien

puedo levantar una UI de prisma en el navegador para ver y editar mis tablas con el comando: 

```
npx prisma studio
```

## Database Migration

* La `Migracion` "migrate" es cuando se lansa un nuevo modelo de la base de datos segun el `Esquema` "schema" del archivo *`/prisma/schema.prisma`*. Esta establece tambien el metodo de conexion, que puede ser, local o remoto segun la variable de entorno: 
  ```
  datasource db {
    provider = "postgresql" // mongodb, sqlite, etc
    url = env("POSTGRES_PRISMA_URL") // direccion de alojamiento en servidor
    directUrl = env("POSTGRES_URL_NON_POOLING") // coneccion remota
  }
  ```

* Comando `npx` para crear una nueva migracion

```
npx prisma migrate dev --name nombremigracion
```

* Scrip: */package.json* para hacer deploy de la nueva migracion

```
"postinstall": "prisma generate" 
```

## Render.com Deploy

instalar el CLI de render
```
npm i -g ??
```

CMD >_
```
??
```
Seguir los pasos para subir un proyecto existente o nuevo proyecto
