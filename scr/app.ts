import 'reflect-metadata';
import express from 'express';
import { RequestContext } from '@mikro-orm/core';
import { orm, syncSchema } from "./shared/db/orm.js";

// Importar rutas
import clientRoutes from './routes/client.routes.js';
import barberRoutes from './routes/barber.routes.js';
import appointmentRoutes from './routes/appointment.routes.js';
import paymentRoutes from './routes/payment.routes.js';


const app = express();


// Middlewares globales
app.use(express.json());


// Middlewares de ORM
app.use(( req, res, next ) => {
  RequestContext.create( orm.em, next )
})

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Bienvenido a la API de Barberia. El servidor está activo.' });
});
// Rutas de negocio
app.use("/clients", clientRoutes);
app.use("/barbers", barberRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/payments", paymentRoutes);


// Rutas inexistentes (404)
app.use(( _, res )  => {
  return res.status(404).json({ message: "Resource not found" });
});


// Iniciar servidor
async function main() {

  await syncSchema(); //solo dev

  app.listen(3000, () => {
    console.log('server running on http://localhost:3000/')
  })
}

main().catch((err) => {
  console.error('Error starting server:', err);
});

