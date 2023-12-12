import express from "express";
import cors from "cors";
import apiRountes from "./src/routes/api.routes.js";

const whitelist = [`${process.env.CLIENT_URL}`, `${process.env.ADMIN_URL}`]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
 

const server = express();
server.use(cors((corsOptions)));
server.use(express.json());

server.use('/', apiRountes);

server.listen(process.env.PORT);