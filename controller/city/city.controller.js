const repository = require('../../repositories/city.repository')

exports.getCities=(req,res,next)=>{
    repository.findAll()
    .then(cities=>{
        res.json({cities});
    })
}



exports.getCityData=(req,res,next)=>{
    let id=req.params.id
    repository.findById(id).then(city=>{
        res.json(city)
    })
    
}
