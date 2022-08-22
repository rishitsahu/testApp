const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to my stack2!!')
});

app.get('/health', (req, res) => {
  res.status(200).send('Up to date...');
});

app.listen(port, () => {
  console.log(`My app listening on port ${port}`)
})
