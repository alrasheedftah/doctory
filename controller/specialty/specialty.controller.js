const repository = require('../../repositories/specialty.repository')

exports.getSpecialties=(req,res,next)=>{
    repository.findAll()
    .then(specialties=>{
        res.json({specialties});
    })
    .catch(err=> console.log(err) )

}



exports.getspecialtyData=(req,res,next)=>{
    let id=req.params.id
    repository.findById(id).then(specialty=>{
        res.json(specialty)
    })
    .catch(err=> console.log(err) )
    
}
