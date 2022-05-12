const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', (req, res) => {
  // res.send("Hola desde get")
  response.success(req, res, "Lista de mensajes")
})

router.post('/', (req,res) => {

  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201)
    })
    .catch(e => {
      response.error(req, res, 'información invalida', 400)
    });
})

module.exports = router;