const messagesDB = [
    {
        id: 1,
        date: new Date(),
        text: 'First text message',
        email: 'firstuser@mail.com',
    },
    {
        id: 2,
        date: new Date(),
        text: 'Second text message',
        email: 'seconduser@mail.com',
    },
];

class Message {
    static messages = messagesDB;

    static getMessages() {
        return Message.messages;
    };

    static getMessageById(id) {
        const [requestedMessage] = Message.messages.filter(m => m.id == id)
        return requestedMessage;
    }

    static createMessage(body) {
        const createdMessage = {id: 3, ...body};
        Message.messages.push(createdMessage);
        
        return createdMessage;
    }

    static updateMessage(changes, id) {
        const [oldMessage] = Message.messages.filter(m => m.id == id);
        const updatedMessage = {...oldMessage, ...changes, changed: new Date()};
        Message.messages[id - 1] = updatedMessage;

        return updatedMessage;
    }

    static deleteMessage(id) {
        const [deletedMessage] = Message.messages.splice(id - 1, 1);
        return deletedMessage;
    }
}

module.exports = Message;