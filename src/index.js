const path = require('path');
// Insert library express, morgan, handlebars from node_modules
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
// middleware: xử lý dữ liệu từ form submit lên
app.use(express.urlencoded({ extended: true }));
// XMLHttpRequest, fetch, axios: xử lý dữ liệu từ code JavaScript lên
app.use(express.json());

// HTTP logger: quan sát các log request từ client lên NodeJs server
app.use(morgan('combined'));
// Template engine
/**
 *  sử dụng template engine handlebars
 */
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
/**
 *  Đặt cho ứng dụng express sẽ sử dụng view engine là handlebars
 */
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
