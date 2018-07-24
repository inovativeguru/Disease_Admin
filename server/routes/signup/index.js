import express from 'express';
import signup from './signup';

let router = express.Router();

router.post('/',signup);

export default router;