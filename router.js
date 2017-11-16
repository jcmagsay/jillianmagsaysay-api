import express, { Router } from 'express';
import { postCallback, deleteCallback, getAllCallback, getByIdCallback, putCallback } from './controllers/aboutController.js';

// Initialize the router
let router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Connected to jillianmagsaysay-api!'
  })
});

router.route('/about')
  .get(getAllCallback)  // Gets all about data
  .post(postCallback); // Adds new about data

router.route('/about/:id')
  .delete(deleteCallback)
  .get(getByIdCallback)
  .put(putCallback);

export default router;
