module.exports = {
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    entities:[process.env.TYPEORM_ENTITIES],
    database: process.env.TYPEORM_DATABASE,
    migrations: [process.env.TYPEORM_MIGRATIONS],
    cli: {
      migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
    },
  }