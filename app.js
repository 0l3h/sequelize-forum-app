const express = require('express');
const app = express();
const validate = require('./middleware/validate.mw');
const messagesController = require('./controllers/messages.controller');

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('<h1>Forum app</h1>');
});

app.get('/messages', messagesController.getMessages);

app.get('/messages/:id', messagesController.getMessageById);

app.post('/messages', validate.validateMessage, messagesController.createMessage);

app.patch('/messages/:id', messagesController.updateMessage);

app.delete('/messages/:id', messagesController.deleteMessage);

app.use((error, req, res, next) => {
    res.status(500).send(error);
});

module.exports = app;