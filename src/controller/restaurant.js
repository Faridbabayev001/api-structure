import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';
import bodyParser from 'body-parser';

export default({ config, db }) => {
  let api = Router();

  // '/api/restaurant/add'
  api.post('/add', (req, res) => {
      res.json({ message: 'Restaurant saved successfully' });
  });
  return api;
}
