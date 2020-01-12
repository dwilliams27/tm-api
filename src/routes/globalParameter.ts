import { Router } from 'express';
import globalParameter from '../controllers/globalParameter';

const router = Router();
router.get('/', globalParameter.getGlobalParameter);
router.post('/', globalParameter.advanceGlobalParameter);

export default router;