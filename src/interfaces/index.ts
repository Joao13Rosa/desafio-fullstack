export interface IContactRequest {
  name: string;
  email: string;
  tel: string;
  id: string;
  createdAt: Date;
}

export interface IClientRequest {
  name: string;
  email: string;
  tel: string;
  contact: IContactRequest[];
}

export interface IClientUpdate {
  name?: string;
  email?: string;
  tel?: string;
  contact?: IContactRequest[];
}
