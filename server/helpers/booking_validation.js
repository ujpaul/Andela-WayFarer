import Joi from 'joi';

const register = {
    validation(book){

        const bookValidation ={
            bus_licence_number:Joi.string().min(7).max(7).required(),
            trip_date:Joi.date().required(),
            first_name:Joi.string().min(3).required().trim(),
            last_name:Joi.string().min(3).required().trim(),
            user_email:Joi.string().min(10).required().trim(),
        };
        return Joi.validate(book,bookValidation);
        },

    }
export default register;