const repository = require('../../repositories/booket.repository')

// get Bookeds for user User 
exports.getUserBookeds=(req,res,next)=>{
    let userId=req.params.id
    const query = { user: userId };
    repository.findAll(query,'doctor').then(bookeds=>{
        res.json(bookeds)
    })
    .catch(err=> console.log(err))
}

