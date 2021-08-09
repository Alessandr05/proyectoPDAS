//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.savecontrol = (req, res) => {
    const idusuario = req.body.idusuario;
    const seriepda = req.body.seriepda;
    const nompda = req.body.nompda;
    const nomusu = req.body.nomusu;
    const proceso = req.body.proceso;
    const turno = req.body.turno;
    conexion.query('INSERT INTO control SET ?', { idusuario: idusuario, seriepda: seriepda, nompda: nompda, nomusu: nomusu, proceso: proceso, turno: turno }, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            //console.log(results);   
            res.redirect('/entrega');
        }
    });
}

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

exports.updatepda = (req, res) => {
    const seriepda = req.body.seriepda;
    const nombre = req.body.nombre;
    const idestado = req.body.idestado;
    const descripcion = req.body.descripcion;
    conexion.query('UPDATE pda SET ? WHERE seriepda = ?', [{ nombre: nombre, idestado: idestado, descripcion: descripcion }, seriepda], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            //console.log(results);   
            res.redirect('/crudPda');
        }
    });
}