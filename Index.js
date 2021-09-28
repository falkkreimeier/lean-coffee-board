const express = require('express')
const app = express()

const port = 3000

app.use(express.json())

app.use('/api/cards', require('./routes/cards'))

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`)
})
