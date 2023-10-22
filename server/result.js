const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/', (req, res) => {
  console.log(req.body);

  const jsonData = JSON.stringify(req.body, null, 2);
  
  fs.writeFileSync('result.json', jsonData)

  res.status(200).json({ message: "ok" });
});




module.exports = router;
