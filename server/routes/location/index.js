import express from 'express';
import addLocation from './addLocation';
import getLocation from './getLocation';

let router = express.Router();

router.get('/',getLocation);
router.put('/',addLocation);

export default router;