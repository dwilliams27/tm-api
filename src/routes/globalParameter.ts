import { Router } from 'express';
import globalParameter from '../controllers/globalParameter';

const router = Router();
router.get('/globalParameters', globalParameter.getGlobalParameter);

export default router;