const express = require("express");
const respuesta = require("../../red/respuestas");
const router = express.Router();
const controlador = require("./index");

//Sin async
// router.get("/", function (req, res) {
//   const todos = controlador.todos().then((items) => {
//     respuesta.success(req, res, items, 200);
//   });
// });

//Rutas 
router.get('/',todos);
router.get('/:id',uno);
router.put('/',eliminar);
router.post('/',agregar);
//Con async
async function todos(req, res) {
  try {
    const todos = await controlador.todos();
    respuesta.success(req, res, todos, 200);

  } catch (error) {
   // respuesta.error(req, res, error, 500);
   next(error)

  }
};

 async function uno(req, res) {
  try {
    const todos = await controlador.uno(req.params.id);
    respuesta.success(req, res, todos, 200);
    
  } catch (error) {
   // respuesta.error(req, res, error, 500);
   next(error)

  }
};
async function agregar(req, res,next) {
  try {
    const todos = await controlador.agregar(req.body);
    if(req.body.id == 0){
      mensaje = "item guardado con exito ";
    }else{
      mensaje = "item acuatlizado con exito";
    }
    respuesta.success(req, res,mensaje, 201);
    
  } catch (error) {
   // respuesta.error(req, res, error, 500);
   next(error)
  }
};

async function eliminar(req, res,next) {
  try {
    const todos = await controlador.eliminar(req.body);
    respuesta.success(req, res, "Item eliminado ok ", 200);
    
  } catch (error) {
   // respuesta.error(req, res, error, 500);
   next(error)
  }
};

module.exports = router;
