import { Entity, PrimaryKey, Property, BaseEntity } from "@mikro-orm/core";


@Entity()
export class Barber extends BaseEntity {
  @PrimaryKey()
  IDBarber!: number;
  @Property()
  name!: string;

  
}