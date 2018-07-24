import express from 'express';
import suggestion from './suggestion';

let router = express.Router();

router.get('/',suggestion);

export default router;