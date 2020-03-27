const repository = require('../../repositories/city.repository')

exports.getStateCities=(req,res,next)=>{
    let stateId=req.params.id
    const query={ state: stateId}
    repository.findAll(query)
    .then(cities=>{
        res.json({cities});
    })
    .catch(err=> console.log(err) )
}

