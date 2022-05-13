const store = require('./store');

function getChats() {
  return store.getChats();
}

function createChat (users) {
  if(!users || users.length < 2) {
    return Promise.reject('Invalid users')
  }

  const newChat = {
    users
  }

  return store.createChat(newChat);
}

module.exports = {
  getChats,
  createChat
}