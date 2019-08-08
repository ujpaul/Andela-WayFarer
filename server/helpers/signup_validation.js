
import Joi from 'joi';

const register = {
validation(user){
const userValidation = {
    email:Joi.string().min(10).max(30).required().trim(),
    password:Joi.string().min(8).max(64).required().trim(),
    first_name:Joi.string().min(3).required().trim(),
    last_name:Joi.string().min(3).required().trim(),
    is_admin:Joi.string().required().trim(),
  };
  
  return Joi.validate(user,userValidation)
},
}

export default register;