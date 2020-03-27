const repository = require('../../repositories/doctor.repository')

exports.getCityDoctors=(req,res,next)=>{
    let CityId=req.params.id
    const query={ cities: CityId}
    repository.findAll(query)
    .then(doctors=>{
        res.json({doctors});
    })
    .catch(err=>console.log(err))
}


