const repository = require('../../repositories/user.repository')
const repositoryBooked = require('../../repositories/booket.repository')

exports.getUsers=(req,res,next)=>{
    repository.findAll()
    .then(users=>{
        res.json({users});
    })
}

exports.getUserData=(req,res,next)=>{
    let id=req.params.id
    repository.findById(id).then(user=>{
        res.json(user)
    })
    .catch(err=> console.log(err))
}

// get Bookeds for user User 
exports.getUserBookeds=(req,res,next)=>{
    let id=req.params.id
    repository.findById(id).then(user=>{
        res.json(user)
    })
    .catch(err=> console.log(err))
}



exports.addNewUser=(req,res,next)=>{
    repository.create(req.body)
    .then((user) => {
        res.json(user);
      })
      .catch((error) => console.log(error));
}