import express from 'express';

import signup from '../controllers/signup';
import signin from '../controllers/signin';
import trip_Controller from '../controllers/updateTrip';
import post_trip from '../controllers/post_trip';

import get_trip from '../controllers/get_trip';

import updateTrip from '../controllers/updateTrip';

import specificTrip from '../controllers/specificTrip';

import deleteBooking from '../controllers/deleteBooking';
import userBooking from '../controllers/userBooking';
import getBooking from '../controllers/getBooking';
import postBooking from '../controllers/postBooking';
import  verifyToken  from '../middlewares/jwtAuthorization';


const router = express.Router();


router.post('/auth/signup',signup);


router.post('/auth/signin',signin);


 router.post('/trips', verifyToken , post_trip);


 router.get('/trips/:trip_id', verifyToken, specificTrip);

 router.get('/trips', verifyToken, get_trip);

 router.put('/trips/:trip_id',verifyToken, updateTrip);

 router.post('/bookings',verifyToken,postBooking);

 router.get('/bookings', verifyToken ,getBooking);

 router.get('/bookings/:user_email', verifyToken, userBooking);

 router.delete('/bookings/:booking_id', verifyToken, deleteBooking);

export default router;