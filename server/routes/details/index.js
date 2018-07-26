import express from 'express';
import addDetails from './addDetails';
import getDetails from './getDetails';

let router = express.Router();

router.post('/',addDetails);
router.get('/',getDetails);

export default router;