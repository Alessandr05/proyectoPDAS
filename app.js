const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.json());
app.use('/', require('./router'));
const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));
const bcryptjs = require('bcryptjs');
const session = require('express-session');
const conexion = require('./database/db');
const { resolveInclude } = require('ejs');
app.use(session({
    secret: 'secret',
    resabe: true,
    saveUninitialized: true,
}));

app.post('/auth', async(req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;
    let passwordHaash = await bcrypt.hash(pass, 8);
    if (user && pass) {
        conexion.query('SELECT * FROM users WHERE user = ?', [user], async(error, results, fields) => {
            if (results.length == 0 || !(await bcrypt.compare(pass, results[0].pass))) {
                res.send('login', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Usuario y/o password incorrectas",
                    alertIcon: "error",
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                });
            } else {
                req.session.name = results[0].name
                res.render('login', {
                    alert: true,
                    alertTitle: "Conexion exitosa",
                    alertMessage: "LOGIN CORRECTO",
                    alertIcon: "success",
                    showConfirmButton: true,
                    timer: 1500,
                    ruta: ''
                });
            }
        })
    } else {
        res.send('Por favor ingrese los siguientes datos')
        res.end();
    }
})


app.listen(2000, () => {
    console.log('SERVER corriendo en http://localhost:2000');
});