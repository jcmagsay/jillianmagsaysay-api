import express, { Router } from 'express';
import { index } from './controllers/aboutController.js';

// Initialize the router
const router = Router();

// Handle /movies.json route with index action from movies controller
router.route('/about.json')
  .get(index);

export default router;
