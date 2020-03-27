const repository = require('../../repositories/state.repository')

exports.getStates=(req,res,next)=>{
    repository.findAll()
    .then(states=>{
        res.json({states});
    })
}


exports.getStateData=(req,res,next)=>{
    let id=req.params.id
    repository.findById(id)
    .then(states=>{
        res.json({states});
    })
}