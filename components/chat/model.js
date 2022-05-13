const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Users'
    }
  ]
});

const model = mongoose.model('chats', mySchema);
module.exports = model;