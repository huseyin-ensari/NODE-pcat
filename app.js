// npm imports
const express = require('express');
const path = require('path');
require('dotenv').config();
// file imports
const indexRouter = require('./src/routers/indexRouter');
// database
require('./src/configs/dbConnection');
// app settings and middlewares
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, './src/views'));
app.use('/img', express.static(path.join(__dirname, '/src/uploads')));
// router
app.use('/', indexRouter);
// listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(PORT, ' is active'));
