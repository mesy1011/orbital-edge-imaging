import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from './Order';

@Entity()
export class SatelliteImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    catalogID: string;

    @Column()
    acquisitionDateStart: Date;

    @Column()
    acquisitionDateEnd: Date;

    @Column('float')
    offNadir: number;

    @Column('float')
    resolution: number;

    @Column('float')
    cloudCoverage: number;

    @Column()
    sensor: string;

    @Column()
    scanDirection: string;

    @Column('float')
    satelliteElevation: number;

    @Column()
    imageBands: string;

    @Column('json')
    geometry: any;

    @OneToMany(() => Order, order => order.satelliteImage)
    orders: Order[];
}