import Joi from 'joi';

const register = {
validation(user){
const userValidation = {
    email:Joi.string().required().trim(),
    password:Joi.string().required().trim(),
  };
  
  return Joi.validate(user,userValidation)
},
}

export default register;