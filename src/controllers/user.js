import connection from "../connection/dbConnect.js"
import bcrypt from "bcrypt";



const getAllUsers = async (req, res) => {
  const getWinner = (arg) => {
    const $players = arg,
          random = Math.floor(Math.random() * $players.length),
          winner = $players[random]
    return winner
  }
  console.log("GET from localhost:3000")
  try {
    // obtiene el primer elemento de vistas de la base de datos
    const data = await connection.user.findMany();
    const draw = getWinner(data);
    res.json(JSON.stringify(draw));
    // res.json(data)
  } catch (error) {
    res.json(error)
  }
}

const createNewUser = async (req, res) => {
  try {

    const {email, username, picture} = req.body;
    
    // busca si el usuario existe en la base de datos
    const emailFound = await connection.user.findUnique({
      where: { email }
    })

    // si ya existe un mismo dato de email, inica que el dato es incorrecto
    if(emailFound) {
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
}

const updateUser = async (req, res) => {
  try {
    // actualiza el contador, el "body" recibe un 'id' y un 'numero' que es el que incrementa el numero de vistas
    const {id, count} = req.body
    const participantes = await connection.user.update({
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
}

const deleteUser = async (req, res) => {
  try {
    // elimina una fila, el "body" recibe un 'id' que identifica la fila a eliminar
    const {id} = req.body
    const participantes = await connection.user.delete({
      where: {
        id: Number(id)
      }
    })
    res.json(participantes)
    
  } catch (error) {
    res.json(error)
  }
  
}

export { createNewUser, getAllUsers, updateUser, deleteUser };