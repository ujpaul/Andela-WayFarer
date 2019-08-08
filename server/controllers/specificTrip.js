
import trips from '../models/trip_file';
const specificTrip = (req, res) => {

    const specificTrip = trips.filter(idt => idt.trip_id === parseInt(req.params.trip_id))[0];
    if (!specificTrip) {
        return res.status(404).send({
            status: "error",
            error: 'this trip is not found'
        });
    } else {
        return res.status(200).json({ 
            status: "success",
            data: specificTrip          
        });
    }
}
export default specificTrip;