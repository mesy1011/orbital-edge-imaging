import { DataSource } from 'typeorm';
import { SatelliteImage } from './entities/SatelliteImage';
import { Order } from './entities/Order';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'orbital_edge_imaging',
    synchronize: true,
    logging: true,
    entities: [SatelliteImage, Order],
    subscribers: [],
    migrations: [],
});