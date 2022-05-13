const db = require('mongoose');
const Model = require('./model');

const uri = 'mongodb+srv://db_user:alu1yLoSVgAqh9Qv@cluster0.o0gwi.mongodb.net/db_chat?retryWrites=true&w=majority'
db.Promise = global.Promise;

db.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("[db] conexión correcta");
  })
  .catch(() => {
    console.error("[db] conexión fallida");
  })

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

module.exports = {
  add: addMessage,
  list: getMessage,
  updateMessage
}