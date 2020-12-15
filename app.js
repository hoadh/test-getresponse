const express = require('express')
const app = express()
const port = 3000

app.get('/callback', (req, res) => {
  console.log(req.query);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})