const db = require('../../Db/mysql');
const controlador = require('../usuarios/controlador');

module.exports = controlador(db); 