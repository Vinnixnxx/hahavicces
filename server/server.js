const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const resultRoute = require('./result');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/result', resultRoute); 

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
