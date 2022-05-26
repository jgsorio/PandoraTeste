import { Router } from 'express';
import api from './services/api';
const router = Router();

router.get('/list', api.listAll);
router.get('/list/:id', api.findOneVotant)

export default router;