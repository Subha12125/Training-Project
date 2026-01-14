const joi = require("joi");

const registrationSchema = joi.object({
    username: joi
        .string()
        .alphanum()
        .min(3)
        .max(30)
        .trim()
        .required()
        .messages({
            "string.alphanum": "Username can contain only letters and numbers.",
            "string.min": "Username must be at least 3 characters long.",
            "string.max": "Username cannot exceed 30 characters.",
            "any.required": "Username is required."
        }),
    
    password: joi.string()
        .pattern(new RegExp("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,30}$"))
        .required()
        .messages({
            "string.pattern.base": "Password must contain at least one letter, one digit, and one special character."
        }),

    email: joi.string()
        .email({ minDomainSegments: 2 })
        .required()
        .messages({
            "string.email": "Please enter a valid email address."
        }),

    phone: joi.string()
        .pattern(/^\d+$/)
        .min(10)
        .max(13)
        .required()
        .messages({
            "string.pattern.base": "Phone number must contain only digits.",
            "string.min": "Phone number must be at least 10 digits.",
            "string.max": "Phone number cannot exceed 13 digits."
        })
});

module.exports = registrationSchema;