import { Request, Response } from "express";
import updateClientService from "../services/updateClient.services";

const updateClientController = async (req: Request, res: Response) => {
  const { name, email, tel, contact } = req.body;

  const id: string = req.params.id;

  const updatedClient = await updateClientService(
    { name, email, tel, contact },
    id
  );

  return res.status(200).json(updatedClient);
};

export default updateClientController;
