const express = require('express')
const app = express()
const port = 3000

app.use(express.jason())

app.get('/api/cards', (req, res) => {
  res.send('This was a get request')
})

app.post('/api/cards', (req, res) => {
  res.send('This was a post request')
})

app.put('/api/cards', (req, res) => {
  res.send('This was a put request')
})

app.delete('/api/cards', (req, res) => {
  res.send('This was a delete request')
})

app.patch('/api/cards', (req, res) => {
  res.send('This was a patch request')
})

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`)
})
