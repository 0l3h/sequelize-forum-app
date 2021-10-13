const Message = require('./../models/messages');

module.exports.getMessages = (req, res) => {
    const messages = Message.getMessages();
    res.status(200).send(messages);
};

module.exports.createMessage = (req, res) => {
    const {body} = req;
    const createdMessage = Message.createMessage(body);
    
    res.status(200).send(createdMessage);
};

module.exports.getMessageById = (req, res) => {
    const {params : {id}} = req;
    const requestedMessage = Message.getMessageById(id);

    if (requestedMessage) {
        res.status(200).send(requestedMessage);
    } else {
        res.status(404).send('Message is not found.')
    }
};

module.exports.updateMessage = (req, res) => {
    const {body, params: {id}} = req;
    const updatedMessage = Message.updateMessage(body, id);
    res.status(200).send(updatedMessage);
};

module.exports.deleteMessage = (req, res) => {
    const {params: {id}} = req;
    const deletedMessage = Message.deleteMessage(id);
    res.status(200).send(deletedMessage);
};