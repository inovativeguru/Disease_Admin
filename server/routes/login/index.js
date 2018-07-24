import express from 'express';
import login from './login';

let router = express.Router();

router.put('/',login);

export default router;