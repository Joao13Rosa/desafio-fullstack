import { Router } from "express";
import createClientController from "../controllers/createClient.controller";
import listClientController from "../controllers/listClient.controller";
import updateClientController from "../controllers/updateClient.controller";
import deleteClientController from "../controllers/deleteClient.controller";

const routes = Router();

routes.post("", createClientController);
routes.get("", listClientController);
routes.patch("/:id", updateClientController);
routes.delete("/:id", deleteClientController);

export default routes;
