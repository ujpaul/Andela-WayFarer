
import booking_data from '../models/booking_file';
const getBooking = (req,res)=>{
    
    return res.status(200).json({
        status:"success",
        data:booking_data
    });
}

export default getBooking;