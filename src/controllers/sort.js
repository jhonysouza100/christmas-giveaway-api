import connection from "../connection/dbConnect.js";

async function getUsers() {
  try {
    // obtiene todos los usuarios
    const data = await connection.user.findMany();
    return data;
    
  } catch (error) {
    console.log(error);
  }
}

async function sortUsers() {

    const currentDate = new Date();    
    // Verifica si la fecha coincide con "24/12 23:30:00" y ejecuta algo
    if (currentDate === '24/12 11:30:0') {
      console.log('La fecha coincide con ESTA!. Ejecutando algo...');
      const users = await getUsers();
      console.log(users);
    }

};

export default sortUsers;