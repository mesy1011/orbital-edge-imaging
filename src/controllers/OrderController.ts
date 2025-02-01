import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Order } from '../entities/Order';
import { SatelliteImage } from '../entities/SatelliteImage';

export default class OrderController {
    static async create(req: Request, res: Response) {
        const { customerName, customerEmail } = req.body;
        const satelliteImageRepository = AppDataSource.getRepository(SatelliteImage);
        const orderRepository = AppDataSource.getRepository(Order);

        const satelliteImage = await satelliteImageRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!satelliteImage) {
            return res.status(404).json({ message: 'Satellite image not found' });
        }

        const order = new Order();
        order.customerName = customerName;
        order.customerEmail = customerEmail;
        order.satelliteImage = satelliteImage;

        await orderRepository.save(order);
        res.status(201).json(order);
    }

    static async getAll(req: Request, res: Response) {
        const orderRepository = AppDataSource.getRepository(Order);
        const orders = await orderRepository.find({ relations: ['satelliteImage'] });
        res.json(orders);
    }
}