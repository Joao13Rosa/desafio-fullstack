import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";
import { AppError } from "../errors/appError";
import { IContactRequest } from "../interfaces";

const createContactService = async (contact: IContactRequest) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find();

  const contactAleradyExists = contacts.find(
    (contact) => contact.email === contact.email
  );

  if (contactAleradyExists) {
    throw new AppError("Contact already exists", 400);
  }

  const newContact = new Contact();
  newContact.name = contact.name;
  newContact.email = contact.email;
  newContact.tel = contact.tel;

  return [contact];
};

export default createContactService;
