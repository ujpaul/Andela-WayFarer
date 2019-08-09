
import bookingValidation from '../helpers/booking_validation';

import bookingData from '../models/booking_file';

const book_seat = (req, res)=>{
    const {error} = bookingValidation.validation(req.body);
    if(error){
        return res.status(400).json({
         status:400,
         error:error.details[0].message,
        });
    }
 
     const newBooking = {
     booking_id:bookingData.length +1,
     bus_licence_number:req.body.bus_licence_number,
     trip_date:req.body.trip_date,
     first_name:req.body.first_name,
     last_name:req.body.last_name,
     user_email:req.body.user_email
 
         }
         bookingData.push(newBooking);
          return res.status(201).json({
             status:"success",
             data:newBooking
         });
     }
     export default book_seat;