import { defineConfig } from "@mikro-orm/mysql";
import { Appointment } from "../entities/Appointment.js";
import { Client } from "../entities/Client.js";
import { Payment } from "../entities/Payment.js";
import { Barber } from "../entities/Barber.js";

export default defineConfig({
  entities: [Appointment, Client, Payment, Barber],
  dbName: "barberia",
  user: "root",
  password: "password",
  host: "localhost",
  port: 3307,
  debug: true,
});
