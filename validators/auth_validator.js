const joi  = require("joi");

const registrationSchema = joi.object({
    username: joi
        .string()
        .alphanum()
        .min(3)
        .max(30)
        .trim()
        .required()
        .messages({
            "string.alphanum":"Username can contain onlt letters and numbers...",
            "string.min": "Username must be at least 3 characters long.....",
            "string": "Username cannot exceed 30 characters...."
        }),
    
    password: joi.string()
        .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,30}$"))
        .required()
        .messages({
            "string.pattern.base": "password must contain atleast one letter, one digit and one spacial character"
        }),
    

    email: joi.string()
        .email({minDomainSegments : 2}).required()
        .messages({
            "string.email": "Please enter a valid email..."
        }),

    phone: joi.string()
        .pattern(/^\d+$/)
        .min(10)
        .max(13)
});

module.exports = registrationSchema;