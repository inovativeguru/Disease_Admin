import express from 'express';
import getsuggestion from './getsuggestion';
import addsuggestion from './addsuggestion';

let router = express.Router();

router.get('/',getsuggestion);
router.put('/',addsuggestion);

export default router;