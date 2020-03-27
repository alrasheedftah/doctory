const repository = require('../../repositories/doctor.repository');

exports.addNewDoctor=(req,res,next)=>{

  const location={
    type:"Point",
    coordinates:req.body.coordinates.split(',').map(Number)
  }
  req.body.location=location
    repository.create(req.body)
    .then((doctor) => {
        res.json(doctor);
      })
      .catch((error) => console.log(error));
}









