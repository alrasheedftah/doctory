const repository = require('../../repositories/booket.repository')

exports.getBookeds=(req,res,next)=>{
    repository.findAll()
    .then(bookeds=>{
        res.json({bookeds});
    })
    .catch((error) => console.log(error));
}

exports.addNewBooke=(req,res,next)=>{
    repository.create(req.body)
    .then((booke) => {
        res.json(booke);
      })
      .catch((error) => console.log(error));
}