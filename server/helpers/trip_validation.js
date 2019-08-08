import Joi from 'joi';
const register ={
 validation(trip){
    const tripValidation = {
        sitting_capacity:Joi.number().min(1).required(),
        origin:Joi.string().required(),
        destination:Joi.string().required(),
        trip_date:Joi.string().required(),
        fare:Joi.number().required(),
        status:Joi.string().required(),
    }
    return Joi.validate(trip,tripValidation);
   
}
}
export default register;