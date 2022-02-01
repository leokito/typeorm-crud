import { ConnectionOptions } from "typeorm";
import dotenv from 'dotenv'

dotenv.config()

const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.PG_HOST,
    port: 5432,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    entities: [
        './src/entities/**/*.ts'
    ],
    migrations: [
        './src/database/migrations/*.ts'
    ],
    cli: {
        migrationsDir: './src/database/migrations',
        entitiesDir: './src/entities',
    },
    // synchronize: true,
    logging: false,
};

export default config;