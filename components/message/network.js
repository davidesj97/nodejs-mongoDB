const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', (req, res) => {
  const filterMessages = req.query.user || null;
  controller.getMessages(filterMessages)
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

router.patch('/:id', (req, res) => {
  controller.updateMessage(req.params.id, req.body.message)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, "Error interno", 500, e)
    })
})

module.exports = router;