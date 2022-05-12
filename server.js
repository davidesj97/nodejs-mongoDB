const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(router);

router.get('/mesagge', (rep,res) => {
  res.send("Hola desde get")
})

router.post('/message', (req,res) => {
  console.log(req.body)
  res.send("Hola desde post")
})

// app.use('/', (req, res) => {
//   res.send('Hola')
// })

app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000");
