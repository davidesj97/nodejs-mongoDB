
const db = require('mongoose');
const { config } = require('./config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName

const uri = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`
db.Promise = global.Promise;

function connect() {
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
}

module.exports = connect
