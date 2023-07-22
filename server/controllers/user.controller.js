exports.userBoard = (req, res) => {
  console.log('req.query - ', req.query)
  res.status(200).send("User Content.");
};