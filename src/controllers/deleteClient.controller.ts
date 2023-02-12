import { Request, Response } from "express";
import deleteClientService from "../services/deleteClient.services";

const deleteClientController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const updatedUser = await deleteClientService(id);

  return res.status(204).json(updatedUser);
};

export default deleteClientController;
