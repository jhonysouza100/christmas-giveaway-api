import express from "express";
import cors from "cors";
import apiRountes from "./src/routes/api.routes.js";
 

const server = express();
server.use(cors({origin: `${process.env.CLIENT_URL}`}));
server.use(express.json());

server.use('/', apiRountes);

server.listen(process.env.PORT);