import { drizzle } from "drizzle-orm/singlestore";
import { createPool } from "mysql2/promise";

import { env } from "~/env";
import * as schema from "./schema";

const globalForDb = globalThis as unknown as {
  db?: ReturnType<typeof drizzle>;
};

export const db =
  globalForDb.db ??
  (globalForDb.db = drizzle({
    client: createPool({
      host: env.SINGLESTORE_HOST,
      port: parseInt(env.SINGLESTORE_PORT),
      user: env.SINGLESTORE_USER,
      password: env.SINGLESTORE_PASSWORD,
      database: env.SINGLESTORE_DATABASE,
      ssl: {},
      maxIdle: 0,
    }),
    schema,
  }));
