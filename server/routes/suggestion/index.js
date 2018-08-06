import express from 'express';
import suggestion from './suggestion';
import addsuggestion from './addsuggestion';

let router = express.Router();

router.get('/',suggestion);
router.put('/',addsuggestion);

export default router;