require('dotenv').config()

const express = require('express')
const cors = require('cors')


const Note = require('./models/note')

const app = express()
app.use(express.static('dist'))
app.use(cors())
app.use(express.json())
//app.use(requestLogger)
//app.use(unknownEndpoint)

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
app.use(requestLogger)

let notes = []

  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  } 
  
  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })

  app.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
      response.json(notes)
    })
  })

  app.post('/api/notes', (request, response) => {
    const body = request.body
    if (!body.content) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }

    const note = {
      content: body.content,
      important: Boolean(body.important) || false,
      //id: generateId(),
    }
    //notes = notes.concat(note)
    note.save().then(savedNote => {
      response.json(savedNote)
    })
    response.json(note)
  })

  app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id
    const note = notes.find(note => note.id === id)
    if(note)  
      response.json(note)
    else {
      response.statusMessage = "NOT FOUND"
      response.status(404).end()
    }
  })



  app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id
    const note = notes.find(note => note.id === id)
    if(note)  {
      response.status(204).end()
    }
    else {
      response.statusMessage = "NOT FOUND"
      response.status(404).end()
    }
  })

  app.use(unknownEndpoint)

//const PORT = 3002
const PORT = process.env.PORT || 3002
app.listen(PORT)
console.log(`Server running on port ${PORT}`)