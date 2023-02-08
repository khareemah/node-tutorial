const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const year = new Date().getFullYear();
  console.log(url, method, year);
  next();
};

module.exports = logger;
