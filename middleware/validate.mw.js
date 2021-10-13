const yup = require('yup');

module.exports.validateMessage = async (req, res, next) => {
    const {body} = req;
    const DATE_SCHEMA = yup.date().max(new Date());
    const MESSAGE_VALIDATION_SCHEMA = yup.object().shape({
        text: yup.string().min(1).max(200).required(),
        email: yup.string().email().required(),
        date: DATE_SCHEMA.required(),
        changed: DATE_SCHEMA
    });

    try {
        const message = await MESSAGE_VALIDATION_SCHEMA.validate(body);
        req.body = message;
        next();
    } catch (error) {
        next(error);
    }

};