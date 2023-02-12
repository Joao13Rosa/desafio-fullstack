import { Request, Response } from "express";
import listClientService from "../services/listClient.services";

const listClientController = async (req: Request, res: Response) => {
  const clients = await listClientService();

  return res.status(200).json(clients);
};

export default listClientController;
