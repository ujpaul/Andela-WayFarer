
import trips from '../models/trip_file';
const get_trip = (req,res)=>{
   
          if(!trips){
        return res.status(204).send({
            status:"error",
            error:"content not found"
        });
    }
    return res.status(200).json({
        status:"success",
        data:trips
    })
}

export default get_trip;