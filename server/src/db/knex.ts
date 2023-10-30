import knex, { Knex } from "knex";
import path from "path";
import fileKnexConfigs from "../../knexconfig";

type envType = "development" | "production" | "test";
const env = (process.env.ENVIRONMENT as envType) ?? "development";

function getKnexConfig() {
  const fileKnexConfig: Knex.Config = fileKnexConfigs[env];

  const knexConfig = {
    ...fileKnexConfig,
    migrations: {
      directory: path.join(process.cwd(), "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(process.cwd(), "src", "db", "seeds"),
    },
  };

  return knexConfig;
}

export default function () {
  const config = getKnexConfig();
  const knexInstance = knex(config);
  console.log(`💽 database connection via knex initialized\n`);

  return knexInstance;
}
