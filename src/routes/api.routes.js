import {Router} from "express";
import connection from "../libs/dbConnection.js"
const router = new Router();
router.get('/', async (req, res) => {
  try {
    // obtiene el primer elemento de vistas de la base de datos
    const participantes = await connection.participantes.findFirst()
    res.json(participantes)
  } catch (error) {
    res.json(error)
  }
});

router.post('/', async (req, res) => {
  try {
    // crea una nueva fila en la base de datos, recibe solo el para metro "count" que es un valor inicial para el contador de 'vistas'
    const participantes = await connection.participantes.create({
      data: req.body
    });
    res.json(participantes);
  } catch (error) {
    res.json(error)
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
