import AppDataSource from "../data-source";
import { Client } from "../entities/client.entity";
import { Contact } from "../entities/contact.entity";
import { AppError } from "../errors/appError";
import { IClientRequest } from "../interfaces";
import createContactService from "./createContact.services";

const createClientService = async ({
  name,
  email,
  tel,
  contact,
}: IClientRequest) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const clients = await clientRepository.find();

  const clientAleradyExists = clients.find((client) => client.email === email);

  if (clientAleradyExists) {
    throw new AppError("Client already exists", 400);
  }

  const client = new Client();
  client.name = name;
  client.email = email;
  client.tel = tel;
  client.contact = await createContactService(contact[0]);
  client.createdAt = new Date();
  client.id;

  clientRepository.create(client);
  await clientRepository.save(client);

  return client;
};

export default createClientService;
