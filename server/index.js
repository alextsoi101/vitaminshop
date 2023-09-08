require('dotenv').config()
const express = require('express')
const sequelize = require('./db/db')
const models = require('./db/models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const path = require('path')
const errorHandler = require('./middleware/errorHandlingMiddleware')
const errorHandlingMiddleware = require('./middleware/errorHandlingMiddleware')
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.error(e)
  }
}

start();