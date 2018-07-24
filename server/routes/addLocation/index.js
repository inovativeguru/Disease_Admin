import express from 'express';
import addLocation from './addLocation';

let router = express.Router();

router.put('/',addLocation);

export default router;