import { MikroORM } from '@mikro-orm/core';
import mikroOrmConfig from '../../config/mikro-orm.config.js';
export const orm = await MikroORM.init(mikroOrmConfig);
export async function syncSchema() {
    await orm.getSchemaGenerator().updateSchema();
}
//# sourceMappingURL=orm.js.map