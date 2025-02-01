import { Router } from 'express';
import SatelliteImageController from '../controllers/SatelliteImageController';
import OrderController from '../controllers/OrderController';

const router = Router();

router.get('/satellite-images', SatelliteImageController.getAll);
router.get('/satellite-images/:id', SatelliteImageController.getById);
router.post('/satellite-images/:id/purchase', OrderController.create);
router.get('/orders', OrderController.getAll);

export default router;