const express = require('express')
const cors = require('cors'); // Import the cors package


const app = express()
/*const http = require('http')

/*const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World kkk')
})*/

// Define the CORS options
const corsOptions = {
    credentials: true,
    origin: ['http://localhost:5173', 'http://localhost:80'] // Whitelist the domains you want to allow
};

app.use(cors(corsOptions)); // Use the cors middleware with your options

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]
  /*const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(notes))
  })*/

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/notes', (request, response) => {
  response.json(notes)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)