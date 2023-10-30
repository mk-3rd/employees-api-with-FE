import getKnexInstance from "../src/db/knex";

async function migrateDatabase() {
  const knexInstance = getKnexInstance();
  await knexInstance.migrate.up();

  console.log("✅ Database migrated");
  process.exit(0);
}

migrateDatabase();
