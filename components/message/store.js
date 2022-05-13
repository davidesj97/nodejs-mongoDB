const Model = require('./model');

function addMessage(message){
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(filterUser) {
  let filter = {}
  if (filterUser !== null) {
    filter = { "user": new RegExp(filterUser, "i")  }
  }
  const messages = await Model.find(filter);
  return messages;

}

async function updateMessage (id, message) {
  const foundMessage = await Model.findById(id);

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

async function _existDB (id) {
  const exist = await Model.exists({
      _id: id
  });
  return exist;
}

async function deleteMessaga (id) {
  if (await _existDB(id)){
    return Model.findByIdAndDelete(id);
  }
  return false
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateMessage,
  deleteMessaga
}