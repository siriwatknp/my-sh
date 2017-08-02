const fs = require('fs')
const design = require('./test')

fs.writeFile("design.json", JSON.stringify(design), function(err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
})
