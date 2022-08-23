const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Welcome to my stack2!! ${process.env.SERVICE_NAME}`)
});

app.get('/health', (req, res) => {
  res.status(200).send('Up to date...');
});

app.listen(port, () => {
  console.log(`My app listening on port ${port} with service name ${process.env.SERVICE_NAME}`)
})
