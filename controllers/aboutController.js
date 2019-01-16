import About from '../models/aboutModel';

// Find all about data entries and return json response
export const getAllCallback = (req, res, next) => {
  console.log('getAllCallback')
  // Iterate through each about entry
  About.find().lean().exec((err, rows) => res.json({
    data: rows.map(row => ({ ...row }))
  }));
};

// Find single about data entry and return json response
export const getByIdCallback = (req, res) => {
  const id = req.params.id;

  About.findById(id, (err, data) => {
      if (err) res.send(err);
      res.json(data);
  });
};

export const deleteCallback = (req, res) => {
  const id = req.params.id;
  About.remove({ _id: id }, (err, bear) => {
      if (err) res.send(err);
      res.json({ message: `Successfully deleted ${id}` });
  });
};

export const postCallback = (req, res, next) => {
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

export const putCallback = (req, res) => {
  const id = req.params.id;

  // use our About model to find the row we want to update
  About.findById(id, function(err, row) {

    if (err) res.send(err);

    // update the row's info
    row.title = req.body.title;
    row.supportingText = req.body.supportingText;

    // save the row
    row.save(function(err) {
      if (err) res.send(err);

      res.json({ message: `Entry ${id} updated!` });
    });

  });
};
