import express from 'express';
import login from './login/login';
import signup from './signup/signup';

let router = express.Router();

router.put('/login',login);
router.post('/signup',signup);

export default router;