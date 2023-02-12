import { Request, Response } from "express";
import createClientService from "../services/createClient.services";

const createClientController = async (req: Request, res: Response) => {
  const { name, email, tel, contact } = req.body;

  const newClient = await createClientService({ name, email, tel, contact });

  return res.status(201).json(newClient);
};

export default createClientController;
