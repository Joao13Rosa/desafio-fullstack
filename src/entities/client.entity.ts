import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Contact } from "./contact.entity";

@Entity()
export class Client {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  tel!: string;

  @Column()
  createdAt!: Date;

  @OneToMany((type) => Contact, (contact) => contact.client, {
    eager: true,
  })
  contact?: Contact[];
}
