import express from 'express';
import addDetails from './addDetails';
import getDetails from './getDetails';

let router = express.Router();

router.get('/',getDetails);
router.post('/',addDetails);

export default router;