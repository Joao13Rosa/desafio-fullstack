import AppDataSource from "../data-source";
import { Client } from "../entities/client.entity";
import { AppError } from "../errors/appError";
import { IClientUpdate } from "../interfaces";

const updateClientService = async (
  { name, email, tel, contact }: IClientUpdate,
  id: string
) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  const findClient = clients.find((client) => client.id === id);

  if (!findClient) {
    throw new AppError("Client not found", 404);
  }

  await clientRepository.update(id, {
    name: name ? name : findClient.name,
    email: email ? email : findClient.email,
    tel: tel ? tel : findClient.tel,
    contact: contact ? contact : findClient.contact,
  });

  const client = await clientRepository.findOneBy({ id });

  return client;
};

export default updateClientService;
