import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { SatelliteImage } from '../entities/SatelliteImage';

export default class SatelliteImageController {
    static async getAll(req: Request, res: Response) {
        const satelliteImageRepository = AppDataSource.getRepository(SatelliteImage);
        const satelliteImages = await satelliteImageRepository.find();
        res.json(satelliteImages);
    }

    static async getById(req: Request, res: Response) {
        const satelliteImageRepository = AppDataSource.getRepository(SatelliteImage);
        const satelliteImage = await satelliteImageRepository.findOneBy({ id: parseInt(req.params.id) });
        if (satelliteImage) {
            res.json(satelliteImage);
        } else {
            res.status(404).json({ message: 'Satellite image not found' });
        }
    }
}