import { Entity, PrimaryKey, Property, ManyToOne, BaseEntity} from "@mikro-orm/core"
import { Appointment } from "./Appointment.js"

@Entity()
export class Payment extends BaseEntity {
  @PrimaryKey()
  IDpayment!: number;

  @Property()
  amount!: number;

  @Property()
  methodPayment!: string;
}