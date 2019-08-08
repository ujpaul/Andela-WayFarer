import booking_data from '../models/booking_file';
const userBooking = (req,res)=>{
    console.log(req.params);
    const email = booking_data.filter(user => user.user_email === req.params.user_email)[0];
    
    if(!email){
        return res.status(404).json({
            status:"error",
            error:"User not found"
        });
    }
    return res.status(200).json({
        status:"success",
        data:email    
    })
}

export default userBooking;