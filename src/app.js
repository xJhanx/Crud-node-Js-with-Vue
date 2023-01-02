const express = require('express');
const config = require('./config');
const clientes = require('./Modulos/clientes/rutas');
const usuarios = require('./Modulos/usuarios/rutas');

const app = express();
const morgan = require('morgan');

const error = require('./red/errors');
//MiddleWeares
//para ver el flujo de peticiones en al consola
app.use(morgan('dev')); 
//para que reconozca los json
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//configuracion
app.set('port', config.app.port);
//rutas 
app.use('/api/clientes',clientes);
app.use('/api/usuarios',usuarios);


app.use(error)

module.exports = app;