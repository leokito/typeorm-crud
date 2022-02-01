const developmentEnv = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: '5432',
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    synchronize: true,
    cli: {
      migrationsDir: './src/database/migrations',
      entitiesDir: './src/entities',
    },
    logging: true,
    entities: [
      'src/entities/**/*.ts',
    ],
    migrations: [
      'src/database/migrations/*.ts',
    ],
  //   subscribers: [
  //     'src/subscribers/**/*.ts',
  //   ],
  };
  
  module.exports = developmentEnv;
  