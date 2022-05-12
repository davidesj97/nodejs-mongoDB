const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', (req, res) => {
  // res.send("Hola desde get")
  controller.getMessages()
    .then(resolve => {
      response.success(req, res, resolve);
    })
    .catch(e => {
      response.error(req, res, "Unexpected error", 500, e);
    })
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