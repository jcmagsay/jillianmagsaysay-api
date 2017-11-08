import About from '../models/aboutModel';

export const index = (req, res, next) => {
  // Find all movies and return json response
  About.find().lean().exec((err, rows) => res.json(
    // Iterate through each movie
    {
      data: rows.map(row => ({ ...row }))
    }
  ));
};
