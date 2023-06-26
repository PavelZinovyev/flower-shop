require('dotenv').config();
const express = require('express');
const models = require('./models/models.js');
const sequelize = require('./db.js');
const cors = require('cors');
const fileUpload = require('express-fileupload'); //
const router = require('./routes/index.js');
const errorHandler = require('./middleware/errorHandlingMiddleware.js');
const path = require('path');

const PORT = process.env.PORT || 7000;
const app = express();

app.use(cors());
app.use(express.json()); // to parse json
app.use(fileUpload({})); // ItemController/create

app.use(express.static(path.resolve(__dirname, 'static'))); // current folder __dirname
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
