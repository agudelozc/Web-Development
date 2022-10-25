const express = require('express');
const path = require('path');
const morgan = require('morgan');

const { mongoose } = require('./database');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares (funciones que se ejecutan antes de llegar a nuestras rutas)
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/task.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});