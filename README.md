# Proyecto "Tours App"


## Pasos para poder correr el proyecto en local 

1. Corre `npm install`
2. Asegurate de tener el archivo `.env` creado y con las variables que encuentras en `.env.example` (Píde las claves al equipo).


## Pasos para correr una migración
1. `npm install --save-dev sequelize-cli`
2. Correr el comando (cambiando el nombre del modelo y los atributos con los que se quiere crear), este comando es para generar un modelo nuevo y su respectiva migración `npx sequelize-cli model:generate --name user --attributes first_name:string,last_name:string,email:string --models-path="./server/models" --migrations-path="./server/migrations"`. 
3. Correr el comando `npx sequelize-cli db:migrate` para crear tablas. 
