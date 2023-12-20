import {Router} from "express";
import connection from "../libs/dbConnection.js"
import bcrypt from "bcrypt";
const router = new Router();

router.get('/', async (req, res) => {
  console.log("GET from localhost:3000")
  try {
    // obtiene el primer elemento de vistas de la base de datos
    const data = await connection.user.findMany();
    res.json(data)
  } catch (error) {
    res.json(error)
  }
});

router.post('/', async (req, res) => {
  try {

    const {email, username, picture} = req.body;
    
    // busca si el usuario existe en la base de datos
    const userFound = await connection.user.findUnique({
      where: { username }
    })
    const emailFound = await connection.user.findUnique({
      where: { email }
    })

    if (userFound) { // si ya existe un mismo dato de email, inica que el dato es incorrecto
      res.status(400).json({message: "User already exist"})
    } else if(emailFound) {
      res.status(400).json({message: "Email already exist"})
    } else { // de lo contrario
      // crea una nueva fila en la base de datos "user"
      const newUser = await connection.user.create({
        data: {
          username, email, picture
        }
      });
      
      res.json(newUser);
    }

  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

router.put('/', async (req, res) => {
  try {
    // actualiza el contador, el "body" recibe un 'id' y un 'numero' que es el que incrementa el numero de vistas
    const {id, count} = req.body
    const participantes = await connection.participantes.update({
      where: { 
        id: Number(id)
      },
      data: {
        count: count,
      }
    })
    res.json(participantes)
  } catch (error) {
    res.json(error)
  }
});

router.delete('/', async (req, res) => {
  try {
    // elimina una fila, el "body" recibe un 'id' que identifica la fila a eliminar
    const {id} = req.body
    const participantes = await connection.participantes.delete({
      where: {
        id: Number(id)
      }
    })
    res.json(participantes)
    
  } catch (error) {
    res.json(error)
  }
  
});

export default router;
