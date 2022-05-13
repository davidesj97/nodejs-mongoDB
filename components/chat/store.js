const Model = require('./model');

function getChats() {
  return new Promise((resolve, reject) => {
    Model.find()
      .populate('users')
      .exec((error, populated) => {
        if (error) {
          reject(error);
        }
        resolve(populated);
      })
  })
}

function createChat (users) {
  const chat = new Model(users);
  return chat.save()
}

module.exports = {
  getChats,
  createChat
}