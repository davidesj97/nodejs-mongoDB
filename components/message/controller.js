const store = require('./store');

function addMessage (user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageController] No hay usuario o mensaje")
      reject("Los datos son incorrectos")
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    }
  
    store.add(fullMessage);
    resolve(fullMessage)
  });
};

function getMessages (filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage (id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      console.error("[messageController] No hay id o mensaje")
      reject("Los datos son incorrectos")
    }

    const result = await store.updateMessage(id, message);
    resolve(result);
  });
}

function deleteMessage (id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      console.log("[messageController] No hay id")
      reject("Los datos son incorrectos")
    }

    store.deleteMessaga(id)
      .then((data)=> {
        if (!data) {
          resolve("Message not found")
        }
        resolve(`Mensaje ${id} eliminado correctamente`);
      })
      .catch(e => {
        reject(e)
      })
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};