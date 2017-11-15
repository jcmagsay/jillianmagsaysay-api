import About from '../models/aboutModel';

export const get = (req, res, next) => {
  // Find all about data and return json response
  About.find().lean().exec((err, rows) => res.json(
    // Iterate through each movie
    {
      data: rows.map(row => ({ ...row }))
    }
  ));
};

export const add = (req, res, next) => {
  var about = new About({
    title: req.body.title,
    supportingText: req.body.supportingText
  });

  // save the about and check for errors
  about.save((err) => {
      if (err) res.send(err);

      res.json({ message: `New entry created: ${about}` });
  });
};
