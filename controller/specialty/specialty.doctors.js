const repository = require('../../repositories/doctor.repository')

exports.getSpecialtyDoctors=(req,res,next)=>{
    let specialtyId=req.params.id
    const query={ specialty: specialtyId}
    repository.findAll(query)
    .then(doctors=>{
        res.json({doctors});
    })
    .catch(err=>console.log(err))
}


