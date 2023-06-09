const apiError = require('../error/apiError');

// next means to next middleware/server func
module.exports = function (err, req, res, next) {
  if (err instanceof apiError) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Непредвиденная ошибка!' });
};
