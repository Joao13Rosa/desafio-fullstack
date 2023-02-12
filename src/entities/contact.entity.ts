import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Client } from "./client.entity";

@Entity()
export class Contact {
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

  @ManyToOne((type) => Client)
  client?: Client;
}
