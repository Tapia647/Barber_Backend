import { MikroORM } from '@mikro-orm/core';
import mikroOrmConfig from '../../config/mikro-orm.config.js';
import { Appointment } from '../../entities/Appointment.js';

export const orm = await MikroORM.init(mikroOrmConfig);


export async function syncSchema() {
  await orm.getSchemaGenerator().updateSchema();
}



