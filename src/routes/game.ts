import { Router } from 'express';
import game from '../controllers/game';

const router = Router();
router.post('/', game.createGame);
//router.get('/:id', game.getGame);

export default router;