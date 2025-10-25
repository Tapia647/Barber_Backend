import { Collection, Entity, OneToMany, PrimaryKey, Property, Cascade, BaseEntity } from "@mikro-orm/core";
import { Appointment } from "./Appointment.js";

@Entity()
export class Client {

  @OneToMany(() => Appointment, (appointment) => appointment.client, { cascade: [Cascade.ALL], })
  appointments = new Collection<Appointment>(this)

  @PrimaryKey({autoincrement: true})
  IDclient?: number;
  
  @Property()
  name!: string;

  @Property({type: 'bigint'})
  phone!: number;

  @Property()
  email!: string;


}