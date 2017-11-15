import express, { Router } from 'express';
import { add, get } from './controllers/aboutController.js';

// Initialize the router
let router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Connected to jillianmagsaysay-api!'
  })
});

// Adds new about data
router.route('/about/add').post(add);

// Gets all about data
router.route('/about/get').get(get);

export default router;
