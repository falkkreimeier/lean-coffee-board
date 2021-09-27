const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end('<h1>YEAH, mein erster eigener Server. WTF</h1>')
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
