const repository = require('../../repositories/city.repository');

exports.addNewCity=(req,res,next)=>{
    repository.create(req.body)
    .then((state) => {
        res.json(state);
      })
      .catch((error) => console.log(error));
}
