const repository = require('../../repositories/booket.repository')

// get Bookeds for user User 
exports.getDoctorBookeds=(req,res,next)=>{
    let doctorId=req.params.id
    const query = { doctor : doctorId };
    repository.findAll(query,'user').then(bookeds=>{
        res.json(bookeds)
    })
    .catch(err=> console.log(err))
}

