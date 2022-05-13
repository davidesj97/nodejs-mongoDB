const Model = require('./model');

function getUsers(filterUser) {
  let filter = {}
  if (filterUser !== null) {
    filter = { "name": new RegExp(filterUser, "i")  }
  }
  const users = Model.find(filter);
  return users
}

function addUser (user) {
  const myUser = new Model(user);
  return myUser.save();
}

module.exports = {
  getUsers,
  addUser,
}