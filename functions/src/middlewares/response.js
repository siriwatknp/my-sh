module.exports = function(error, req, res, next) {
  if(error){
    console.log('error', error)
    res.send(error)
  }
  const response = req.response;
  console.log('response', response)
  if(!response){
    res.send({ response: 'empty' })
  }
  res.send(response)
}
