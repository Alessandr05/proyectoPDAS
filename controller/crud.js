//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.savepda = (req, res) => {
    const seriepda = req.body.seriepda;
    const nombre = req.body.nombre;
    const idestado = req.body.idestado;
    const descripcion = req.body.descripcion;
    conexion.query('INSERT INTO pda SET ?', { seriepda: seriepda, nombre: nombre, idestado: idestado, descripcion: descripcion }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            //console.log(results);   
            res.redirect('/crudPda');
        }
    });
}