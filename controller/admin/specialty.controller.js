const repository = require('../../repositories/specialty.repository');

exports.addNewSpecialty=(req,res,next)=>{
    console.log(req.body)
    repository.create(req.body)
    .then((specialty) => {
        res.json(specialty);
      })
      .catch((error) => console.log(error));
}
