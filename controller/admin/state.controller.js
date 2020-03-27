const repository = require('../../repositories/state.repository');

exports.addNewState=(req,res,next)=>{
    console.log(req.body)

    const location={
        type: "Point",
        coordinates:req.body.coordinates.split(',').map(Number)
      }
    req.body.location=location
    repository.create(req.body)
    .then((state) => {
        res.json(state);
      })
      .catch((error) => console.log(error));
}
