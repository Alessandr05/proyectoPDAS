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

router.get('/createpda', (req, res) => {
    conexion.query('SELECT * FROM estado', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('createpda', { results: results });
        }
    })
});

router.get('/devolucion', (req, res) => {
    res.render('devolucion');
});

router.get('/createPda', (req, res) => {
    res.render('createPda');
});

router.get('/editpda/:seriepda', (req, res) => {
    const seriepda = req.params.seriepda;
    conexion.query('SELECT* FROM pda WHERE seriepda = ?', [seriepda], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('editpda', { pda: results[0] });
        }
    })
})


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

router.get('/delete/:seriepda', (req, res) => {
    const seriepda = req.params.seriepda;
    conexion.query('DELETE FROM pda WHERE seriepda = ?', [seriepda], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/crudPda')
        }
    })
})

router.get('/edit/:seriepda', (req, res) => {
    const seriepda = req.params.seriepda;
    conexion.query('SELECT * FROM pda WHERE seriepda = ?', [seriepda], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('crudPda', { user: results[0] });
        }
    })
})

router.post('/savecontrol', crud.savecontrol);
router.post('/savepda', crud.savepda);
router.post('/updatepda', crud.updatepda);

module.exports = router;