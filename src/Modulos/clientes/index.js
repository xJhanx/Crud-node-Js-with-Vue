const db = require('../../Db/mysql');
const controlador = require('../clientes/controlador');

module.exports = controlador(db); 