const db = require('../../Db/mysql');

let tabla = 'usuarios';

//revisar porque tala no me la recibe como parametro y toco quemarla

module.exports = function(db){

    if(!db){
        db = require('../../Db/mysql'); 
    }
    
    function todos(){
        return db.todos(tabla);
    }
    
    function uno(id){
        return db.uno(tabla,id);
    }
    
    function eliminar(body){
        return db.eliminar(tabla,body);
    }
    
    function agregar(body){
        return db.agregar(tabla,body);
    }
    return{

        todos,
        uno,
        eliminar,
        agregar
    }
}