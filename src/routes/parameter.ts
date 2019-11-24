import { Router } from 'express';
import parameter from '../controllers/parameter';

const router = Router();
router.get('/parameters', parameter.getParameter);

export default router;