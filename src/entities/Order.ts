import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { SatelliteImage } from './SatelliteImage';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerName: string;

    @Column()
    customerEmail: string;

    @ManyToOne(() => SatelliteImage, satelliteImage => satelliteImage.orders)
    satelliteImage: SatelliteImage;
}