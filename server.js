const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response');
const router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(router);

router.get('/message', (req, res) => {
  // res.send("Hola desde get")
  response.success(req, res, "Lista de mensajes")
})

router.post('/message', (req,res) => {
  console.log(req.body)
  if (req.query.error == "ok") {
    response.error(req, res, 'Error simulado', 400)
  } else {
    response.success(req, res, 'Creado correctamente', 201)
  }
})

// app.use('/', (req, res) => {
//   res.send('Hola')
// })

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000");
