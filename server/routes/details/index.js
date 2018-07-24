import express from 'express';
import addDetails from './addDetails';

let router = express.Router();

router.post('/',addDetails);

export default router;