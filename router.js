const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/devolucion', (req, res) => {
    conexion.query('SELECT* FROM control', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('devolucion', { results: results });
        }
    })
});

router.get('/xd', (req, res) => {
    conexion.query('SELECT* FROM control', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('xd', { results: results });
        }
    })
});



router.get('/entrega', (req, res) => {
    conexion.query('SELECT* FROM control', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('entrega', { results: results });
        }
    })
});

router.get('/crudPda', (req, res) => {
    conexion.query('SELECT * FROM pda', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('crudPda', { results: results });
        }
    })
});

router.get('/devolucion', (req, res) => {
    res.render('devolucion');
});

router.get('/xd', (req, res) => {
    res.render('xd');
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.get('/crudpda', (req, res) => {
    res.render('crudPda');
});

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/entrega', (req, res) => {
    res.render('entrega');
});
const crud = require('./controller/crud');

router.post('/savepda', crud.savepda);

module.exports = router;