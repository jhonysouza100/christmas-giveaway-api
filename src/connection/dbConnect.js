import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
  return new PrismaClient();
}

// guarda una coneccion de prisma en la variable globalThis, para que no se cree una nueva coneccion cada vez que se importa el modulo.
const globalForPrisma = globalThis;

// const connection = new PrismaClient() ↓↓↓
// si existe una coneccion de prisma en la variable globalThis, la usa, si no existe, la crea.
const connection = globalForPrisma.prisma ?? prismaClientSingleton();

export default connection;

if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma = connection;