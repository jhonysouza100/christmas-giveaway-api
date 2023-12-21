import connection from "../libs/dbConnection.js"
async function getUsers() {
  try {
    // obtiene todos los usuarios
    const data = await connection.user.findMany();
    return data;
    
  } catch (error) {
    console.log(error);
  }
}

function sortUsers() {
  setInterval(async () => {
    const currentDate = new Date();
    // Obtiene día, mes y hora actual
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Los meses van de 0 a 11, por lo que sumamos 1
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    
    // Formatea la fecha sin incluir el año
    const formattedDate = `${day}/${month} ${hours}:${minutes}:${seconds}`;
    
    console.log(formattedDate);
    
    // Verifica si la fecha coincide con "24/12 23:30:00" y ejecuta algo
    if (formattedDate === '21/12 1:20:0') {
      console.log('La fecha coincide con ESTA!. Ejecutando algo...');
      const users = await getUsers();
      console.log(users);
    }
  }, 1000);
};

export default sortUsers;