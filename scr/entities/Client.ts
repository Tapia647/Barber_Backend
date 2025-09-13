import { Collection, Entity, OneToMany, PrimaryKey, Property, Cascade, BaseEntity } from "@mikro-orm/core";
import { Appointment } from "./Appointment.js";

@Entity()
export class Client {
  @OneToMany(() => Appointment, (appointment) => appointment.client, { cascade: [Cascade.ALL], })
  appointments = new Collection<Appointment>(this)

  @PrimaryKey()
  IDclient?: number;

  @Property()
  name!: string;

  @Property()
  phone!: number;

  @Property({ nullable: true })
  email!: string;



}