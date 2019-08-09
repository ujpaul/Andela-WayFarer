import trips from '../models/trip_file';
import tripValidation from '../helpers/trip_validation';
import users from '../models/user_file';

const post_trip = (req, res) => {

    //  const signedUser = users.find(user => user.email === verifyToken.email);
    //   console.log(signedUser);
    //  if(signedUser.is_admin === false){
    //     return res.status(403).json({
    //         status:403,
    //         error:"Forbidden Access,You are not admin"
    //     });
    // }

    
    const { error } = tripValidation.validation(req.body);
    if (error) {
        return res.status(400).json({
            status: 400,
            error: error.details[0].message,
        });
    }

    const newTrip = {
        
        trip_id: trips.length + 1,
        sitting_capacity: req.body.sitting_capacity,
        origin: req.body.origin,
        destination: req.body.destination,
        trip_date: req.body.trip_date,
        fare: req.body.fare,
        status: req.body.status,
    }
    trips.push(newTrip);
    return res.status(201).json({
        status: 'success',
        data: newTrip
    });
}
export default post_trip;