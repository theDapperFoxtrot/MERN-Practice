const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "steve") {
    req.user = { name: "steve", id: 1 };
    next();
  } else {
    res.status(401).send(`<img src="https://httpstatusdogs.com/img/401.jpg" />`);
  }
};

module.exports = authorize;
