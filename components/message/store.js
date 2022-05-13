const Model = require('./model');

function addMessage(message){
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (filterUser !== null) {
      filter = { "user": new RegExp(filterUser, "i")  }
    }
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error);
        }
        resolve(populated);
      })
  })

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