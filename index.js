require('dotenv').config();
const express = require('express');
const sequelize = require('./src/db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path')
const router = require('./src/routes/index');
const errorHandler = require('./src/middlware/ErrorHandlingMiddleware');


const PORT  = process.env.PORT || 5000 ;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'src/static')));
app.use(fileUpload({}));
app.use('/', router);
//обработка ошибок
app.use(errorHandler);

const start = async  () => {
    try {
        await sequelize.authenticate()
        await  sequelize.sync()
        app.listen(PORT, () => console.log("server startin on "))
    }
    catch (e) {
        console.log("Error");
    }

}
start();
