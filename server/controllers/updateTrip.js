import express from 'express';
import Joi from 'joi';

import trips from '../models/trip_file';

import tripValidation from '../helpers/trip_validation'
    
const updateTrip= (req, res)=>{
   
const id = trips.filter(id=>id.trip_id === parseInt(req.params.trip_id));
if(!id){
    return res.status(404).send({
        status:"error",
        error:"trip not found"
    })
}
const valid = {
    status:Joi.string().required()
}
const validated = Joi.validate(req.body,valid)
if(validated.error)
{
    return res.status(400).send(validated.error.details[0].message);
}
id.status=req.body.status
if(req.body.status === "cancelled")
{
    return res.status(200).json({
        status:"success",
    message:'trip cancelled successfully'
    })
}
return res.status(400).send({
    status:"error",
    error:"you should enter cancelled to cancel trip"
})
}
export default  updateTrip;


