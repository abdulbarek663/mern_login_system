const Joi = require("joi");

const signupValidation = async (req, resp, next) => {
  const schema = joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });
  const { err } = schema.validate(req.body);
  if (err) {
    return resp.status(400).json({ message: " Bad request", err });
  }
  next();
};

const loginValidation = async (req, resp, next) => {
    const schema = joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(4).max(100).required(),
    });
    const { err } = schema.validate(req.body);
    if (err) {
      return resp.status(400).json({ message: " Bad request", err });
    }
    next();
  };

module.exports = { signupValidation , loginValidation };
