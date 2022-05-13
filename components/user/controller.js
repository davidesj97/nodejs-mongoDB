const store = require('./store');

function getUsers (user) {
  return store.getUsers(user);
}

function addUser (name) {
  if (!name) {
    return Promise.reject('Invalid name')
  }

  const user = {
    name,
  }

  return store.addUser(user)
}

module.exports = {
  getUsers,
  addUser,
}