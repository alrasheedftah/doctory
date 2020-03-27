const repository = require('../../repositories/doctor.repository')

exports.getDoctors=(req,res,next)=>{
    repository.findAll()
    .then(doctors=>{
        res.json({doctors});
    })
}

exports.getDoctorData=(req,res,next)=>{
    let id=req.params.id
    repository.findById(id).then(doctor=>{
        res.json(doctor)
    })
    .catch(err=> console.log(err))
}

