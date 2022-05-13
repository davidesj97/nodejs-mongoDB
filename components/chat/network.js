const express = require('express');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', (req, res) => {
  controller.getChats()
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, "Internal error", 500, e);
    })
})

router.post('/', (req, res) => {
  controller.createChat(req.body.users)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(e => {
      response.error(req, res, "Internal error", 500, e);
    })
})

module.exports = router