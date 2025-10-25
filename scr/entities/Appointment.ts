import { Entity, PrimaryKey, Property, ManyToOne, OneToOne, Rel } from "@mikro-orm/core"
import { Client } from "./Client.js"
import { Payment } from "./Payment.js"

export enum AppointmentState{
  Pending = 'pending',
  Confirmed = 'confirmed',
  Completed = 'completed',
  Cancelled = 'cancelled'
}

@Entity()
export class Appointment {
  @PrimaryKey({autoincrement:true})
  IDappointment!: number;
  
  @ManyToOne (() => Client, { nullable: false })
  client!: Rel <Client>;
  
  @OneToOne (() => Payment, { nullable: true })
  payment!: Payment;
  
  @Property({ nullable: false })
  dateAppointment!: Date;

  @Property({ nullable: false })
  time!: string;

  @Property()
  state: AppointmentState = AppointmentState.Pending

}
