const Joi = require('joi');
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    phone: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    isGold: {
      type: Boolean,
      required: true,
      default: false
    }
  }));

  function validateCustomer(customer) {
    const schema = {
      name: Joi.string().min(3).max(50).required(),
      phone: Joi.string().min(3).max(50).required(),
      isGold: Joi.boolean()
    };
  
    return Joi.validate(customer, schema);
  }

  module.exports.Customer = Customer;
  module.exports.validate = validateCustomer;