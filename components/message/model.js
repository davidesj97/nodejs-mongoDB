const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "Users"
  },
  message: String,
  date: Date
});

const model = mongoose.model('Messages', mySchema);
module.exports = model;